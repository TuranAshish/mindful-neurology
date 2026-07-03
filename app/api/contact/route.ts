import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const allowedRoles = new Set([
  "Patient",
  "Medical professional",
  "Potential donor",
  "Other",
]);

const allowedServices = new Set([
  "Neurology consultation",
  "Online meditation program",
  "Meditation & mind-body healing retreat",
  "Mailing list / future events",
  "Employment / team openings",
  "Mind-body medicine information",
]);

type FormspreeResponse = {
  ok?: boolean;
  errors?: Array<{ message?: string }>;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const role = String(body.role || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();
    const consent = body.consent === true || body.consent === "true" || body.consent === "on";
    const honeypot = String(body.website || "").trim();

    // Silently accept obvious bot submissions without forwarding them.
    if (honeypot) {
      return NextResponse.json({
        message: "Thank you. Your inquiry has been received.",
      });
    }

    if (
      !name ||
      name.length > 120 ||
      !emailPattern.test(email) ||
      email.length > 254 ||
      phone.length > 40 ||
      !allowedRoles.has(role) ||
      !allowedServices.has(service) ||
      message.length < 10 ||
      message.length > 5000 ||
      !consent
    ) {
      return NextResponse.json(
        { message: "Please complete all required fields with valid information." },
        { status: 400 },
      );
    }

    const formId = process.env.FORMSPREE_FORM_ID?.trim();

    if (!formId) {
      console.error("Missing FORMSPREE_FORM_ID environment variable.");
      return NextResponse.json(
        { message: "The contact form is not configured yet. Please contact the clinic directly." },
        { status: 503 },
      );
    }

    const response = await fetch(`https://formspree.io/f/${encodeURIComponent(formId)}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "Not provided",
        role,
        service,
        message,
        subject: `New Mindful Neurology inquiry — ${service}`,
        consent: "Accepted",
        source: "Mindful Neurology website",
      }),
      signal: AbortSignal.timeout(12_000),
    });

    const result = (await response.json().catch(() => null)) as FormspreeResponse | null;

    if (!response.ok) {
      const detail = result?.errors?.map((item) => item.message).filter(Boolean).join("; ");
      console.error("Formspree error", {
        status: response.status,
        detail: detail || "Unknown Formspree error",
      });

      return NextResponse.json(
        { message: "The inquiry could not be delivered. Please try again shortly." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message: "Thank you. Your inquiry has been sent, and the team will respond within 1–2 business days.",
    });
  } catch (error) {
    if (error instanceof Error && error.name === "TimeoutError") {
      return NextResponse.json(
        { message: "The request timed out. Please check your connection and try again." },
        { status: 504 },
      );
    }

    console.error("Contact form error", error);
    return NextResponse.json(
      { message: "Invalid request. Please refresh the page and try again." },
      { status: 400 },
    );
  }
}

import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

function getSiteUrl(request: Request) {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    request.headers.get("origin") ||
    "http://localhost:3000"
  ).replace(/\/$/, "");
}

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      { message: "Stripe is not configured. Add STRIPE_SECRET_KEY to .env.local." },
      { status: 500 },
    );
  }

  const amount = Number.parseInt(process.env.STRIPE_PAYMENT_AMOUNT_CENTS || "5000", 10);
  const currency = (process.env.STRIPE_CURRENCY || "usd").toLowerCase();
  const productName = process.env.STRIPE_PRODUCT_NAME || "Mindful Neurology Payment";

  if (!Number.isFinite(amount) || amount < 50) {
    return NextResponse.json(
      { message: "STRIPE_PAYMENT_AMOUNT_CENTS must be a valid amount in cents." },
      { status: 500 },
    );
  }

  try {
    const stripe = new Stripe(secretKey);
    const siteUrl = getSiteUrl(request);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: productName,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/payment-cancelled`,
    });

    if (!session.url) {
      return NextResponse.json(
        { message: "Stripe did not return a checkout URL." },
        { status: 500 },
      );
    }

    return NextResponse.redirect(session.url, 303);
  } catch (error) {
    console.error("Stripe checkout error", error);
    return NextResponse.json(
      { message: "Unable to start Stripe Checkout. Please try again." },
      { status: 500 },
    );
  }
}

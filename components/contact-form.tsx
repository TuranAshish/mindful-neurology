"use client";

import { FormEvent, useState } from "react";
import { ArrowRightIcon } from "@/components/icons";

type Status = { type: "idle" | "loading" | "success" | "error"; message?: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "loading" });

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Unable to submit the form.");
      setStatus({ type: "success", message: result.message });
      form.reset();
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Something went wrong." });
    }
  }

  const inputClass = "w-full rounded-2xl border border-[#cbdcd7] bg-white px-4 py-3.5 text-[15px] text-[#173b38] outline-none transition placeholder:text-[#8ba09b] focus:border-[#0f7466] focus:ring-4 focus:ring-[#0f7466]/10";

  return (
    <form data-animate="fade-left" data-tilt-card="" onSubmit={submit} className="tilt-card grid gap-4 rounded-[2rem] bg-white p-5 shadow-[0_24px_80px_rgba(18,62,58,.12)] md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[#355a55]">
          Name
          <input name="name" required autoComplete="name" className={inputClass} placeholder="Your full name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[#355a55]">
          Email
          <input name="email" required type="email" autoComplete="email" className={inputClass} placeholder="you@example.com" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[#355a55]">
          Phone <span className="font-normal text-[#849792]">(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="Your phone number" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[#355a55]">
          I am a
          <select name="role" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select one</option>
            <option>Patient</option>
            <option>Medical professional</option>
            <option>Potential donor</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-[#355a55]">
        Service of interest
        <select name="service" required defaultValue="" className={inputClass}>
          <option value="" disabled>Select a service</option>
          <option>Neurology consultation</option>
          <option>Online meditation program</option>
          <option>Meditation & mind-body healing retreat</option>
          <option>Mailing list / future events</option>
          <option>Employment / team openings</option>
          <option>Mind-body medicine information</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#355a55]">
        How can we help?
        <textarea name="message" required rows={5} className={`${inputClass} resize-y`} placeholder="Tell us a little about what you are looking for." />
      </label>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="flex items-start gap-3 text-xs leading-5 text-[#6a817d]">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-[#0f7466]" />
        I understand this form is not for emergencies and does not create a physician-patient relationship.
      </label>
      <button type="submit" disabled={status.type === "loading"} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#123e3a] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0f7466] disabled:cursor-wait disabled:opacity-60">
        {status.type === "loading" ? "Sending…" : "Send inquiry"}
        {status.type !== "loading" && <ArrowRightIcon className="h-4 w-4" />}
      </button>
      {status.message && (
        <p role="status" className={`rounded-2xl px-4 py-3 text-sm ${status.type === "success" ? "bg-[#e7f5ef] text-[#176150]" : "bg-[#fff1ef] text-[#98483c]"}`}>
          {status.message}
        </p>
      )}
    </form>
  );
}

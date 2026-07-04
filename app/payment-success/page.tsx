import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-[#f1f7f4] px-5 py-24 text-[#173b38]">
      <section className="mx-auto max-w-2xl rounded-[2rem] bg-white p-8 shadow-[0_24px_80px_rgba(18,62,58,.12)] md:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0f7466]">Payment successful</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Thank you for your payment.</h1>
        <p className="mt-5 leading-8 text-[#5f7873]">
          Your Stripe payment was completed successfully. Please keep your Stripe receipt for your records.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-[#123e3a] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0f7466]">
          Back to home
        </Link>
      </section>
    </main>
  );
}

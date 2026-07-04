import { ArrowRightIcon } from "@/components/icons";

type StripeCheckoutButtonProps = {
  className?: string;
  label?: string;
};

export function StripeCheckoutButton({
  className = "inline-flex items-center justify-center gap-2 rounded-full bg-[#635bff] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(99,91,255,.22)] transition hover:-translate-y-0.5 hover:bg-[#4f46e5]",
  label = "Pay securely with Stripe",
}: StripeCheckoutButtonProps) {
  return (
    <form action="/api/stripe/checkout" method="POST">
      <button type="submit" className={className}>
        {label}
        <ArrowRightIcon className="h-4 w-4" />
      </button>
    </form>
  );
}

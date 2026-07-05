import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="#top"
      className="group inline-flex items-center gap-3"
      aria-label="Mindful Neurology home"
    >
      <span className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full border border-[#dcecf1] bg-[#ffffff] shadow-[0_10px_30px_rgba(23,98,126,.14)]">
        <Image
          src="/images/mindful-logo-hd.png"
          alt=""
          width={512}
          height={576}
          priority
          className="h-10 w-auto object-contain"
        />
      </span>

      {!compact && (
        <span className="leading-none">
          <span className="block font-serif text-[1.18rem] font-semibold tracking-[-0.02em] text-[#173b38]">
            Mindful Neurology
          </span>
          <span className="mt-1 block text-[0.63rem] font-semibold uppercase tracking-[0.19em] text-[#647c78]">
            Integrative Neurology Clinic
          </span>
        </span>
      )}
    </Link>
  );
}

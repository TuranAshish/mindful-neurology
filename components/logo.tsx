import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="#top" className="group inline-flex items-center gap-3" aria-label="Mindful Neurology home">
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-[#123e3a] text-white shadow-[0_10px_30px_rgba(18,62,58,.22)]">
        <svg viewBox="0 0 44 44" className="h-8 w-8" aria-hidden="true">
          <path d="M11 26c0-9 5-15 11-15s11 6 11 15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M14 25c3-6 6-9 8-9s5 3 8 9M22 11v21" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M13 29c4-2 7-2 9 1 2-3 5-3 9-1" fill="none" stroke="#9ed4c7" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M17 35c2-2 3-4 5-7 2 3 3 5 5 7" fill="none" stroke="#9ed4c7" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block font-serif text-[1.18rem] font-semibold tracking-[-0.02em] text-[#173b38]">Mindful Neurology</span>
          <span className="mt-1 block text-[0.63rem] font-semibold uppercase tracking-[0.19em] text-[#647c78]">Integrative Neurology Clinic</span>
        </span>
      )}
    </Link>
  );
}

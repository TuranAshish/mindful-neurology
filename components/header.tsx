"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  ["Services", "#services"],
  ["Our approach", "#approach"],
  ["Science", "#science"],
  ["Team", "#team"],
  ["Contact", "#contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-[#dbe7e3]/80 bg-[#fbfdfc]/92 shadow-[0_10px_40px_rgba(18,62,58,.07)] backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex h-[78px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-[#355a55] transition hover:text-[#0f7466]">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#123e3a] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(18,62,58,.2)] transition hover:-translate-y-0.5 hover:bg-[#0f7466]">
            Request a consultation
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-[#cfded9] bg-white/80 text-[#173b38] lg:hidden" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>

      <div className={`fixed inset-0 z-[60] bg-[#0d2f2b]/30 backdrop-blur-sm transition lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`} onClick={() => setOpen(false)}>
        <div className={`absolute right-0 top-0 h-full w-[min(88vw,390px)] bg-[#fbfdfc] p-6 shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`} onClick={(event) => event.stopPropagation()}>
          <div className="flex items-center justify-between">
            <Logo compact />
            <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-[#d5e2de]" aria-label="Close menu" onClick={() => setOpen(false)}>
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-12 grid gap-2" aria-label="Mobile navigation">
            {nav.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-4 font-serif text-2xl text-[#173b38] transition hover:bg-[#edf5f2]">
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-8">
            <ThemeToggle mobile />
          </div>
          <a href="#contact" onClick={() => setOpen(false)} className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#123e3a] px-5 py-4 text-sm font-semibold text-white">
            Request a consultation
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

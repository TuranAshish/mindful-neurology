"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { StripeCheckoutButton } from "@/components/stripe-checkout-button";

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#dbe7e3] bg-white shadow-[0_10px_40px_rgba(18,62,58,.07)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[78px] max-w-[1320px] items-center justify-between gap-5 px-5 lg:px-8">
        <div className="shrink-0">
          <Logo />
        </div>

        <nav
          className="hidden items-center gap-5 xl:flex 2xl:gap-7"
          aria-label="Primary navigation"
        >
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="whitespace-nowrap text-sm font-medium text-[#355a55] transition hover:text-[#0f7466]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <ThemeToggle />

          <a
            href="#contact"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#123e3a] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(18,62,58,.2)] transition hover:-translate-y-0.5 hover:bg-[#0f7466]"
          >
            Book consultation
            <ArrowRightIcon className="h-4 w-4" />
          </a>

          <StripeCheckoutButton
            label="Pay fee"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#635bff] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(99,91,255,.22)] transition hover:-translate-y-0.5 hover:bg-[#4f46e5]"
          />
        </div>

        <button
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#cfded9] bg-white text-[#173b38] shadow-[0_8px_24px_rgba(18,62,58,.12)] xl:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[999] bg-[#0d2f2b]/45 transition xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-dvh w-[min(88vw,390px)] overflow-y-auto border-l border-[#dbe7e3] bg-white p-6 shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <Logo compact />

            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-[#d5e2de] bg-white text-[#173b38] shadow-sm"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-12 grid gap-2" aria-label="Mobile navigation">
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-4 font-serif text-2xl text-[#173b38] transition hover:bg-[#edf5f2]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-8 rounded-2xl border border-[#dbe7e3] bg-[#f8fbfc] p-4">
            <ThemeToggle mobile />
          </div>

          <div className="mt-4 grid gap-3 pb-8">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-[#123e3a] px-5 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(18,62,58,.18)]"
            >
              Book consultation
              <ArrowRightIcon className="h-4 w-4" />
            </a>

            <StripeCheckoutButton
              label="Pay consultation fee"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#635bff] px-5 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(99,91,255,.22)]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
"use client";

function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
    </svg>
  );
}

function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20.7 15.1A8.5 8.5 0 0 1 8.9 3.3 8.5 8.5 0 1 0 20.7 15.1Z" />
    </svg>
  );
}

export function ThemeToggle({ mobile = false }: { mobile?: boolean }) {
  function toggleTheme() {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");

    root.classList.toggle("dark", nextIsDark);
    root.style.colorScheme = nextIsDark ? "dark" : "light";
    localStorage.setItem("mindful-neuro-theme", nextIsDark ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={mobile
        ? "theme-toggle flex w-full items-center justify-between rounded-2xl border border-[#d5e2de] bg-white/70 px-4 py-3 text-sm font-semibold text-[#173b38] transition hover:border-[#0f7466]"
        : "theme-toggle grid h-11 w-11 place-items-center rounded-full border border-[#cfded9] bg-white/80 text-[#173b38] shadow-sm transition hover:-translate-y-0.5 hover:border-[#0f7466] hover:text-[#0f7466]"}
      aria-label="Toggle light and dark theme"
      title="Toggle light and dark theme"
    >
      {mobile && <span>Appearance</span>}
      <span className="relative grid h-5 w-5 place-items-center">
        <MoonIcon className="h-5 w-5 dark:hidden" />
        <SunIcon className="hidden h-5 w-5 dark:block" />
      </span>
    </button>
  );
}

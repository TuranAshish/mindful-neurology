import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mindfulneuro.com"),
  title: {
    default: "Mindful Neurology | Integrative Neurology Clinic",
    template: "%s | Mindful Neurology",
  },
  description:
    "Integrative neurology consultations, meditation education, breathwork, gentle movement, and research-informed mind-body support in Monroe, New York.",
  keywords: [
    "integrative neurology",
    "mindful neurology",
    "neurology Monroe NY",
    "meditation for neurological conditions",
    "breathwork",
    "Parkinson's support",
  ],
  openGraph: {
    title: "Mindful Neurology",
    description:
      "Physician-led, research-informed approaches to neurological health, nervous-system regulation, and long-term well-being.",
    url: "https://www.mindfulneuro.com",
    siteName: "Mindful Neurology",
    type: "website",
    images: [{ url: "/images/neurons.jpg", width: 1200, height: 630, alt: "Neural network illustration" }],
  },
  robots: { index: true, follow: true },
};

const themeScript = `
  (function () {
    try {
      var savedTheme = localStorage.getItem("mindful-neuro-theme");
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var useDark = savedTheme ? savedTheme === "dark" : prefersDark;
      document.documentElement.classList.toggle("dark", useDark);
      document.documentElement.style.colorScheme = useDark ? "dark" : "light";
    } catch (_) {}
  })();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

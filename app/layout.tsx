import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GMB Optimizer – Automate Your Google My Business",
  description: "Optimize Google My Business listings automatically. AI-powered post content, review monitoring, and local search performance tracking."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="05913f78-2d1a-46fc-92c2-59c6758cd6d2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

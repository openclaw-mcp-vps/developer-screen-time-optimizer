import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevEyes – Developer Screen Time Optimizer",
  description: "Optimize screen time for developer eye health. Track coding sessions, get smart break reminders, and correlate screen time with eye strain symptoms."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3477c466-72a0-4a8b-a88a-b45962bc4b89"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

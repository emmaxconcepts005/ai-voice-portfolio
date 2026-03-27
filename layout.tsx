import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emmanuel | AI Voice Agent Developer",
  description:
    "AI voice agents, appointment booking systems, and workflow automations using Retell AI, Vapi, Twilio, Make, n8n, and GoHighLevel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

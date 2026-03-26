import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WareVoyant — AV Lifecycle Management Platform",
  description:
    "The lifecycle management platform built for AV professionals — from scoping through service, designed around how you actually work.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rbr8wxi.css" />
      </head>
      <body className="bg-[#231F20] text-[#EAEBF2] antialiased" style={{ fontFamily: '"aktiv-grotesk", "aktiv-grotesk-thin", sans-serif' }}>
        {children}
      </body>
    </html>
  );
}

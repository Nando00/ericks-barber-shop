import { TempoInit } from "@/components/tempo-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erick's Barber Shop Book an Appointment 📅",
  description: "Leave with a fresh cut 💈💈",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Ericks Barber Studio',
    description: 'Leave with a fresh cut 💈💈',
    url: 'https://ericksbarberstudio.com',
    siteName: 'Ericks Barber Studio',
    images: [
      {
        url: 'https://ericksbarberstudio.com/logo.jpg', // Full URL important!
        width: 1200,
        height: 630,
        alt: 'Ericks Barber Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={inter.className}>
        {children}
        <TempoInit />
      </body>
    </html>
  );
}

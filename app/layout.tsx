import "./globals.css";
import { Metadata } from 'next'
import { Roboto } from "next/font/google";
import { SessionProvider } from "next-auth/react"
import Linda from "./Linda.png"
const inter = Roboto({
  weight: ["100",  "300", "400", "500",  "700",  "900"],
  subsets: ["latin", "latin-ext"],
  preload: false,
});

export const metadata: Metadata = {
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>

      <body className='h-screen' >

      {children}</body>
    </html>
  );
}

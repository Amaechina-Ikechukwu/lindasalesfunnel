import "./globals.css";
import { Poppins } from "next/font/google";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "devanagari", "latin-ext"],
  preload: false,
});

export const metadata = {
  title: "Lindasalespro",
  description: "Automated Lead Follow-up and Conversion",
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "CRM",
    "Lead generation",
    "crm",
    "lead conversion",
    "Lead conversion",
  ],
  openGraph: {
    images: "/Linda.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} lang="en">
      <body>{children}</body>
    </html>
  );
}

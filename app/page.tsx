import General from "../compoments/Linda/General";
import { Poppins } from "next/font/google";
import { Metadata } from 'next'
const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "devanagari", "latin-ext"],
  preload: false,
});
export const metadata: Metadata = {
  title: 'LindaSalesPro',
    description: 'Convert leads into Paying Customers with ease, from one app.',
  openGraph: {
    title: 'LindaSalesPro',
    description: 'Convert leads into Paying Customers with ease, from one app.',
    url: 'https://chooyagroup.com',
    siteName: 'chooyagroup',
    images: ['/Linda.png',
    ],
    locale: 'en_US',
    type: 'website',
  },
};
export default function Page() {
  return (
    <main className={inter.className}>    
      {/*<General />*/}
    </main>
  );
}

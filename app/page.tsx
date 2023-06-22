import General from "../compoments/Linda/General";
import { Poppins } from "next/font/google";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "devanagari", "latin-ext"],
  preload: false,
});

export default function Page() {
  return (
    <main className={inter.className}>      <General />
    </main>
  );
}

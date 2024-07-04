import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PolyfillProvider from "@/PolyFillProvider/polyFillProvider";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata = {
  title: "Vaayun",
  description:
    "Empowering The next generation of athletes: Revolutionizing sports education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-full h-full scroll-smooth  `}>
        <PolyfillProvider>
          {/* <center className="Heading">Under Maintainance</center> */}
          <Navbar />
          {children}
          <Footer />
        </PolyfillProvider>
      </body>
    </html>
  );
}

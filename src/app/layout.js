import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PolyfillProvider from "@/PolyFillProvider/polyFillProvider";
import SplashScreenManager from "@/helper/SplashScreenManager";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata = {
  title:
    "Vaayaun Sports Academy|Your entryway to top-notch athletic training|Discover world-class facilities with https://www.vaayunsports.com/",
  description:
    "The top sports academies in Mumbai cover a wide range of sports, including football, tennis, badminton, hockey, athletics, and more.",
  keywords: [
    "athletics academy near me",
    "sports academy website",
    "Best sports education website",
    "academy sports",
    "academy",
    "academy sports academy near me",
    "sports academies near me",
    "website for sports academy",
    "academy sports near me",
    "academy sports near my location",
    "sport academies near me",
    "Best sports education website",
    "academy sports outdoors",
    "sporting goods near me",
    "cricket training",
    "best sports academy near me",
    "top educational sports website",
    "sports academy",
    "youth sports",
    "best football training academy",
    "sports academy website",
    "website for sports academy",
    "academy sports and outdoors",
    "best sports academy",
    "best sports coaching near me",
    "best sports academy near me",
    "website for sports and youth",
  ],
  canonical: "https://www.vaayunsports.com/",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-full h-full scroll-smooth`}>
        <PolyfillProvider>
          <SplashScreenManager>
            <Navbar />
            {children}
            <Footer />
          </SplashScreenManager>
        </PolyfillProvider>
      </body>
    </html>
  );
}

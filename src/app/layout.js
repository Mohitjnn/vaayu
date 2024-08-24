import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PolyfillProvider from "@/PolyFillProvider/polyFillProvider";
import SplashScreenManager from "@/helper/SplashScreenManager";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata = {
  title: {
    default: "Vaayun",
    template: "%s - Vaayun",
  },
  description:
    "Empowering The next generation of athletes: Revolutionizing sports education",
  openGraph: {
    url: "https://vaayu-one.vercel.app/",
    type: "website",
    title: "Vaayun",
    description:
      "Empowering The next generation of athletes: Revolutionizing sports education",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/252f37cf-c793-439f-8f12-b4bb468ad7ae.png?token=8a1w5iNAGbYSlLS5oEY1QyRerB7b_gXEvFYgxzKaSCI&height=630&width=1200&expires=33260500366",
        width: 1200,
        height: 630,
        alt: "Vaayun - Empowering The next generation of athletes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "vaayu-one.vercel.app",
    url: "https://vaayu-one.vercel.app/",
    title: "Vaayun",
    description:
      "Empowering The next generation of athletes: Revolutionizing sports education",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/252f37cf-c793-439f-8f12-b4bb468ad7ae.png?token=8a1w5iNAGbYSlLS5oEY1QyRerB7b_gXEvFYgxzKaSCI&height=630&width=1200&expires=33260500366",
      },
    ],
  },
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

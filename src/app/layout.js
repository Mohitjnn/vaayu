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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Vaayun</title>
        <meta
          name="description"
          content="Empowering The next generation of athletes: Revolutionizing sports education"
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://vaayu-one.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vaayun" />
        <meta
          property="og:description"
          content="Empowering The next generation of athletes: Revolutionizing sports education"
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/252f37cf-c793-439f-8f12-b4bb468ad7ae.png?token=8a1w5iNAGbYSlLS5oEY1QyRerB7b_gXEvFYgxzKaSCI&height=630&width=1200&expires=33260500366"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vaayu-one.vercel.app" />
        <meta property="twitter:url" content="https://vaayu-one.vercel.app/" />
        <meta name="twitter:title" content="Vaayun" />
        <meta
          name="twitter:description"
          content="Empowering The next generation of athletes: Revolutionizing sports education"
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/252f37cf-c793-439f-8f12-b4bb468ad7ae.png?token=8a1w5iNAGbYSlLS5oEY1QyRerB7b_gXEvFYgxzKaSCI&height=630&width=1200&expires=33260500366"
        />
      </head>
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

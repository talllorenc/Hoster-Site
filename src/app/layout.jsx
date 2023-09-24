import Navbar from "@/components/header/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata = {
  title: "Hoster | dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </head>
      <body className={`${montserrat.className}`}>
        <ThemeProvider>
          <div className="main_container">
            <Navbar />
            {children}
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

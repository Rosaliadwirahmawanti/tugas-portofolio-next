import "./globals.css";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";


const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={geistSans.variable}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

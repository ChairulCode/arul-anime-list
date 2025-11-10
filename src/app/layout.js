import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/index";

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "arul anime list",
  description: "indonesia website anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-dark antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

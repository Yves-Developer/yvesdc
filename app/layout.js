/** @format */

import Navbar from "@/components/Navbar";
import "./globals.css";
export const metadata = {
  title: "Yves DC, Portfolio Websites - 2024",
  description: "All made projects from 2021",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

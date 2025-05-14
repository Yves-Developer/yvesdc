/** @format */

import Navbar from "@/components/Navbar";
import "./globals.css";
import DataProvider from "@/context/DataProvider";
import PlausibleProvider from "next-plausible";
export const metadata = {
  title: `Yves DC, Portfolio Websites - ${new Date().getFullYear()}`,
  description: "All made projects from 2021",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PlausibleProvider domain="yvesdc.vercel.app" trackOutboundLinks={true}>
          <Navbar />
          <DataProvider>{children}</DataProvider>
        </PlausibleProvider>
      </body>
    </html>
  );
}

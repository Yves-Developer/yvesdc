import { Inter, Instrument_Serif } from "next/font/google";
import PlausibleProvider from "next-plausible";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata = {
  title: "MUGISHA Yves — Software Engineer",
  description:
    "Software engineer and solo developer. Currently building Castfy.",
  openGraph: {
    title: "MUGISHA Yves — Software Engineer",
    description:
      "Software engineer and solo developer. Currently building Castfy.",
    url: "https://yvesdc.vercel.app",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>
        <PlausibleProvider domain="yvesdc.vercel.app" trackOutboundLinks={true}>
          {children}
        </PlausibleProvider>
      </body>
    </html>
  );
}

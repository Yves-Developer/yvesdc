import { Inter, Instrument_Serif } from "next/font/google";
import PlausibleProvider from "next-plausible";
import ThemeToggle from "@/components/ThemeToggle";
import { themeScript } from "@/lib/theme";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata = {
  metadataBase: new URL("https://yves.castfy.app"),
  title: "MUGISHA Yves — Software Engineer",
  description:
    "Software engineer and solo developer. Currently building Castfy.",
  openGraph: {
    title: "MUGISHA Yves — Software Engineer",
    description:
      "Software engineer and solo developer. Currently building Castfy.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@YvesDC0",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeToggle />
        <PlausibleProvider domain="yvesdc.vercel.app" trackOutboundLinks={true}>
          {children}
        </PlausibleProvider>
      </body>
    </html>
  );
}

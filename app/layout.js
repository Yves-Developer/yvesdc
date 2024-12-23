
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Yves DC, Portfolio Websites - 2024",
  description: "All made projects from 2021",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto py-8 px-4">
         {children} 
        </main>
        <Footer />
      </body>
    </html>
  );
}

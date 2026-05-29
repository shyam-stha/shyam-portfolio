import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { PortfolioProvider } from "./context/PortfolioContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shyam Shrestha | Full Stack & AI Application Developer",
  description:
    "Portfolio of Shyam Shrestha, a Full Stack Developer and AI Application Developer based in Bhaktapur, Nepal.",
  metadataBase: new URL("https://shyam-stha.com"),
  openGraph: {
    title: "Shyam Shrestha | Full Stack & AI Application Developer",
    description:
      "AI-powered applications, agentic systems, scalable full-stack platforms, and intelligent web experiences.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth theme-night ${inter.className}`}>
      <body className="antialiased transition-colors duration-300">
        <ThemeProvider>
          <PortfolioProvider>
            {children}
          </PortfolioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

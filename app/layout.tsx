import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0c] text-neutral-200 antialiased font-sans">{children}</body>
    </html>
  );
}



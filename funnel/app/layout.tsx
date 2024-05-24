import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cash To Collect",
  description: "Collect more with the right words",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/ctc.png" type="image/png" />
        <meta property="og:title" content="Cash To Collect" />
        <meta property="og:description" content="Collect more with the right words" />
        <meta property="og:image" content="https://www.cashtocollect.com/cover.png" />
        <meta property="og:url" content="https://www.cashtocollect.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cash To Collect" />
        <meta name="twitter:description" content="Collect more with the right words" />
        <meta name="twitter:image" content="https://www.cashtocollect.com/cover.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

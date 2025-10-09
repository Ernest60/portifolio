import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portifolio",
  description: "Portifolio create by next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={` ${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import "./globals.css";

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"], // Use the relevant subset for your app
  weight: ["400", "700"], // Adjust the weights you need
  display: "swap", // Use the swap strategy for better UX
});

export const metadata: Metadata = {
  title: "Baskitty",
  description: "Baskitty Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${familjenGrotesk.className} ${familjenGrotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

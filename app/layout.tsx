import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const phonkContrast = localFont({
  src: "./fonts/Phonk-Contrast.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const phonkRegular = localFont({
  src: "./fonts/Phonk-Regular.otf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "QlqEstaComida",
  description: "Hablo mamaguebadas y hago reviews de comida",
  icons: {
    icon: "/QLQ.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${phonkContrast.variable} ${phonkRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

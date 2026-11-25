import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://mostaquenaim.com"),
  title: "Mostaque Naim — Full-Stack Software Developer",
  description:
    "Portfolio of Mostaque Ahammed Naim, a full-stack developer with about 3 years building production systems on Next.js, NestJS, TypeScript and PostgreSQL — payments, couriers, real-time orders and infrastructure. Open to remote.",
  openGraph: {
    title: "Mostaque Naim — Full-Stack Software Developer",
    description:
      "Portfolio of Mostaque Ahammed Naim, a full-stack developer with about 3 years building production systems on Next.js, NestJS, TypeScript and PostgreSQL — payments, couriers, real-time orders and infrastructure. Open to remote.",
    url: "https://mostaquenaim.com",
    siteName: "Mostaque Naim",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/75275684?v=4",
        width: 460,
        height: 460,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mostaque Naim — Full-Stack Software Developer",
    description:
      "Portfolio of Mostaque Ahammed Naim, a full-stack developer with about 3 years building production systems on Next.js, NestJS, TypeScript and PostgreSQL — payments, couriers, real-time orders and infrastructure. Open to remote.",
    images: ["https://avatars.githubusercontent.com/u/75275684?v=4"],
  },
};

export const viewport = {
  themeColor: "#05070a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

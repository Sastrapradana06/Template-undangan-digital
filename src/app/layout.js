import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Husni & Indah",
  description:
    "Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Anda untuk hadir dalam pernikahan kami pada Jumat, 4 Juli 2025.",
  keywords: [
    "Undangan Pernikahan",
    "Husni dan Indah",
    "Wedding Invitation",
    "Nikah 2025",
  ],
  authors: [{ name: "Husni & Indah", url: "https://husni-indah.vercel.app" }],
  creator: "Husni & Indah",
  themeColor: "#ffffff",
  openGraph: {
    title: "Undangan Pernikahan Husni & Indah",
    description:
      "Jumat, 4 Juli 2025 - Klik untuk melihat undangan pernikahan kami.",
    url: "https://husni-indah.vercel.app",
    siteName: "Husni & Indah Wedding",
    images: [
      {
        url: "https://husni-indah.vercel.app/bg-home.jpeg", // Gambar undangan ukuran 1200x630
        width: 1200,
        height: 630,
        alt: "Undangan Pernikahan Husni & Indah",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter, Dancing_Script, Exo_2, Playwrite_US_Modern } from 'next/font/google';
import { Providers } from "@/lib/Providers";


const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
});

const dancing_script = Dancing_Script({
  subsets: ['latin'],
  variable: '--dancing_script',
  weight: ["400", "500", "600", "700"]
});

const exo_2 = Exo_2({
  subsets: ['latin'],
  variable: "--exo_2",
  weight: ["400", "500", "600", "700"]
});

const playwrite = Playwrite_US_Modern({
  adjustFontFallback: true,
  display: "swap",
  fallback: ["serif", "sans-serif"],
  variable: "--playwrite",
  weight: ["400", "100", "200", "300"]
});


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fuad Hasan Safat",
  description: `I am Fuad Hasan, a software developer who has journeyed from Rowmari, Kurigram—a serene town by the Brahmaputra River often ravaged by deadly floods—to the bustling capital of Bangladesh, Dhaka. Growing up in such a resilient community instilled in me the values of perseverance, adaptability, and determination. Today, I channel these traits into my work as a developer, crafting innovative solutions and overcoming challenges with creativity and grit.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={`${inter.variable} ${dancing_script.variable} ${exo_2.variable} ${geistSans.variable} ${geistMono.variable} ${playwrite.variable} antialiased`}
        >
          <meta property="og:image" content="/profilepic/profilepic.jpg" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          {children}
        </body>
      </html>
    </Providers>
  )
}

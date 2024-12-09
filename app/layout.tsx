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
  title: "Fuad Hasan Safat - Software Developer",
  description: "I am Fuad Hasan, a software developer from Rowmari, Kurigram, Bangladesh. I specialize in frontend, backend, and database design, crafting innovative solutions with perseverance and adaptability.",
  keywords: ["Fuad Hasan", "Software Developer", "Bangladesh", "Full Stack Developer", "Database Design", "Frontend Development", "Backend Development"],
  authors: [{name: "Fuad Hasan Safat", url:"https://fuad-hasan-safat.vercel.app/"}],
  creator: "Fuad Hasan Safat",
  publisher: "Fuad Hasan Safat",
  openGraph: {
    title: "Fuad Hasan Safat - Software Developer",
    description: "Discover Fuad Hasan Safat, a software developer from Rowmari, Kurigram, Bangladesh, specializing in modern web technologies, backend development, and database design.",
    url: "https://fuad-hasan-safat.vercel.app/",  // Update with your actual website URL
    siteName: "Fuad Hasan Safat",
    images: [
      {
        url: '/profilepic/fuad.jpg',
        width: 1200,
        height: 630,
        alt: "Fuad Hasan Safat Profile Picture"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fuad_safat",  // Update with your actual Twitter handle
    creator: "@fuad_safat", // Update with your actual Twitter handle
    title: "Fuad Hasan Safat - Software Developer",
    description: "Software developer from Rowmari, Kurigram, Bangladesh, specializing in modern web development and database design.",
    images: "/profilepic/fuad.jpg"
  },


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
          <meta property="og:image" content="/profilepic/fuad.jpg" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="630" />
          <meta property="og:image:height" content="630" />
          {children}
        </body>
      </html>
    </Providers>
  )
}

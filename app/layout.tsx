import localFont from "next/font/local";
import "./globals.css";
import { Inter, Dancing_Script, Exo_2, Playwrite_US_Modern, Geologica } from 'next/font/google';
import { Providers } from "@/lib/Providers";
import { HeroProviders } from "./heroproviders";
import Head from "next/head";


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

const geologica = Geologica({
  subsets: ['latin'],
  variable: '--geologica',
  weight: ["400", "500", "600", "700"]
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri&display=swap" rel="stylesheet"></link>
          <meta property="og:image" content="/profilepic/fuad.jpg" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="630" />
          <meta property="og:image:height" content="630" />
        </Head>
        <body
          className={`${inter.variable} ${dancing_script.variable} ${exo_2.variable} ${geistSans.variable} ${geistMono.variable} ${playwrite.variable} ${geologica.variable} antialiased`}
        >


          <HeroProviders>
            {children}
          </HeroProviders>

        </body>
      </html>
    </Providers>
  )
}

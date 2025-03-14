import "../globals.css";
import BlogHeader from "@/components/header/BlogHeader";



// export const metadata: Metadata = {
//   title: "Fuad Hasan Safat - Software Developer",
//   description: "I am Fuad Hasan, a software developer from Rowmari, Kurigram, Bangladesh. I specialize in frontend, backend, and database design, crafting innovative solutions with perseverance and adaptability.",
//   keywords: ["Fuad Hasan", "Software Developer", "Bangladesh", "Full Stack Developer", "Database Design", "Frontend Development", "Backend Development"],
//   authors: [{ name: "Fuad Hasan Safat", url: "https://fuad-hasan-safat.vercel.app/" }],
//   creator: "Fuad Hasan Safat",
//   publisher: "Fuad Hasan Safat",
//   openGraph: {
//     title: "Fuad Hasan Safat - Software Developer",
//     description: "Discover Fuad Hasan Safat, a software developer from Rowmari, Kurigram, Bangladesh, specializing in modern web technologies, backend development, and database design.",
//     url: "https://fuad-hasan-safat.vercel.app/",  // Update with your actual website URL
//     siteName: "Fuad Hasan Safat",
//     images: [
//       {
//         url: '/profilepic/fuad.jpg',
//         width: 1200,
//         height: 630,
//         alt: "Fuad Hasan Safat Profile Picture"
//       }
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@fuad_safat",  // Update with your actual Twitter handle
//     creator: "@fuad_safat", // Update with your actual Twitter handle
//     title: "Fuad Hasan Safat - Software Developer",
//     description: "Software developer from Rowmari, Kurigram, Bangladesh, specializing in modern web development and database design.",
//     images: "/profilepic/fuad.jpg"
//   },


// };

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <div>
      <BlogHeader />
      {children}
    </div>


  )
}

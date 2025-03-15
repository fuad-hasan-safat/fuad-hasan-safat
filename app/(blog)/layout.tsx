import "../globals.css";
import BlogHeader from "@/components/header/BlogHeader";


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

import React from "react";

interface CardProps {
  title: string;
  subtitleInfo: string;
  cgpa?: string;
  children: React.ReactNode; // Correctly typed children
}

export default function InformationCard({ title, subtitleInfo, cgpa, children }: CardProps) {
  return (
    <div
      className={`w-full max-w-[650px] scale-100 bg-white rounded-md z-[999] shadow-md shadow-slate-300  my-[25px] py-[30px] px-[20px] font-sans hover:scale-105 relative ease-in-out duration-500`}
    >
      <h1 className={`text-3xl pr-[50px] text-[#30c1ff99] hover:text-stone-200 relative ease-in-out duration-500`}>{title}</h1>
      <h2 className={`text-sm pt-[15px] text-slate-500`}>{subtitleInfo}</h2>
      <div className={`absolute top-[35px] right-[15px] text-red-400`}>
        <span>{cgpa}</span>
      </div>
      <div className={`pt-[25px] text-[18px] text-slate-500`}>{children}</div>
    </div>
  );
}

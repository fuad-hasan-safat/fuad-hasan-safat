import React from "react";

interface CardProps {
  title: string;
  subtitleInfo: string;
  cgpa?: string;
  children: React.ReactNode;
}

export default function InformationCard({ title, subtitleInfo, cgpa, children }: CardProps) {
  return (

    <div className={`group w-full overflow-hidden max-w-[650px] bg-white rounded-md z-[999] shadow-md shadow-slate-300 my-[25px] py-[30px] px-[20px] font-sans p-5`}
    >
      {/* Children content with hover scale effect */}
      <div className={`pt-[25px] text-[18px] text-slate-500 transition-transform duration-500 group-hover:scale-105 relative`}>
        {/* Title and Subtitle - not affected by hover scale */}
        <h1 className={`text-3xl pr-[50px] text-[#30c1ff99] hover:text-stone-200 transition-colors pl-[10px]`}>
          {title}
        </h1>
        <h2 className={`text-sm pt-[15px] text-slate-500`}>
          {subtitleInfo}
        </h2>

        {/* CGPA - positioned absolutely and not scaled */}
        {cgpa && (
          <div className={`absolute top-[30px] right-[0px] text-red-400`}>
            <span>{cgpa}</span>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
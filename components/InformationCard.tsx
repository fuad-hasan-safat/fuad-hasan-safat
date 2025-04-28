import React from "react";

interface CardProps {
  title: string;
  subtitleInfo: string;
  cgpa?: string;
  children: React.ReactNode;
}

export default function InformationCard({ title, subtitleInfo, cgpa, children }: CardProps) {
  return (
    <div className="relative w-full max-w-2xl bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl md:hover:shadow-2xl transition-shadow duration-300 p-6 md:p-8 border border-gray-100 group mx-4 sm:mx-auto">
      {/* Timeline Indicator - Hidden on mobile */}
      <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-md md:shadow-lg flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
            {title}
          </h1>
          <h2 className="text-base md:text-lg font-medium text-gray-600 mt-1">
            {subtitleInfo}
          </h2>
        </div>
        
        {/* CGPA Badge */}
        {cgpa && (
          <div className="flex items-center bg-gradient-to-br from-green-100 to-green-50 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-green-200 self-start md:self-auto">
            <span className="text-sm md:text-base font-bold text-green-700">{cgpa}</span>
            <span className="text-xs md:text-sm text-green-600 ml-1.5 md:ml-2">CGPA</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-3 md:space-y-4 text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4 md:pt-6">
        {children}
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-3 top-3 md:right-6 md:top-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg className="w-12 h-12 md:w-16 md:h-16 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      </div>
    </div>
  );
}
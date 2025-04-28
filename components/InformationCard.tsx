// InformationCard.tsx (updated design)
import React from "react";

interface CardProps {
  title: string;
  subtitleInfo: string;
  cgpa?: string;
  children: React.ReactNode;
}

export default function InformationCard({ title, subtitleInfo, cgpa, children }: CardProps) {
  return (
    <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 border border-gray-100 group">
      {/* Timeline Indicator */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </div>

      {/* Header Section */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <h2 className="text-lg font-medium text-gray-600 mt-1">{subtitleInfo}</h2>
        </div>
        
        {/* CGPA Badge */}
        {cgpa && (
          <div className="flex items-center bg-gradient-to-br from-green-100 to-green-50 px-4 py-2 rounded-full border border-green-200">
            <span className="text-green-700 font-bold">{cgpa}</span>
            <span className="text-sm text-green-600 ml-2">CGPA</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 text-gray-700 leading-relaxed border-t border-gray-100 pt-6">
        {children}
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-6 top-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg className="w-16 h-16 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      </div>
    </div>
  );
}
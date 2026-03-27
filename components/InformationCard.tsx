// InformationCard.tsx (simplified)
import React from "react";

interface CardProps {
  title: string;
  subtitleInfo: React.ReactNode;
  cgpa?: string;
  children: React.ReactNode;
  className?: string;
}

export default function InformationCard({ title, subtitleInfo, cgpa, children, className }: CardProps) {
  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-6 ${className}`}>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
        <div className="flex-1">
          <h1 className="text-xl font-bold text-gray-800">
            {title}
          </h1>
          <h2 className="text-sm text-gray-600 mt-1">
            {subtitleInfo}
          </h2>
        </div>
        
        {cgpa && (
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full self-start md:self-auto">
            <span className="text-sm font-semibold text-gray-700">{cgpa}</span>
            <span className="text-xs text-gray-600 ml-1">CGPA</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 text-gray-700 text-sm border-t border-gray-100 pt-4">
        {children}
      </div>
    </div>
  );
}
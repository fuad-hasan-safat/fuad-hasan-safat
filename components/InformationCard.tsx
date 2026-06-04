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
    <div className={`bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 ${className}`}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
        <div className="flex-1">
          <h1 className="text-lg font-bold text-white">{title}</h1>
          <h2 className="text-sm text-slate-400 mt-1">{subtitleInfo}</h2>
        </div>
        {cgpa && (
          <div className="flex items-center bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full self-start">
            <span className="text-sm font-semibold text-cyan-400">{cgpa}</span>
            <span className="text-xs text-cyan-400/70 ml-1">CGPA</span>
          </div>
        )}
      </div>
      <div className="space-y-4 text-slate-300 text-sm border-t border-slate-700/50 pt-4">
        {children}
      </div>
    </div>
  );
}
// ClassicInformationCard.tsx
import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  subtitle: string;
  duration?: string;
  location?: string;
  gpa?: string;
  children: React.ReactNode;
  className?: string;
}

export default function ClassicInformationCard({
  title,
  subtitle,
  duration,
  location,
  gpa,
  children,
  className = "",
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white bg-opacity-70 p-6 rounded-xl border border-neutral-200 shadow-md hover:shadow-lg transition-shadow ${className}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-serif font-semibold text-[#1a1a1a] text-[1.25rem]">{title}</h3>
          <p className="text-[#4a4a4a]">{subtitle}</p>
        </div>
        {duration && <span className="text-[#777] text-sm">{duration}</span>}
      </div>

      {(location || gpa) && (
        <div className="flex gap-4 mb-4 text-[#666] text-sm">
          {location && <span>{location}</span>}
          {gpa && <span>GPA: {gpa}</span>}
        </div>
      )}

      <div className="space-y-4 text-[#444]">{children}</div>
    </motion.div>
  );
}

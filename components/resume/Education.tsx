// Education.tsx
import React from "react";
import InformationCard from "../InformationCard";

const Education = () => {
  const educationData = [
    {
      title: "Hochschule Harz",
      subtitle: "M.Eng. Technology and Innovation Management",
      period: "2026 - 2028 (expected)",
      stratpoint: 2026,
      content: null,
    },
    {
      title: "Ahsanullah University of Science and Technology",
      subtitle: "B.Sc. in Computer Science and Engineering",
      period: "2017 - 2022",
      cgpa: "3.33/4.00",
      stratpoint: 2017,
      content: (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/40">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-2">
              Key Subjects
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Data Structures",
                "Algorithms",
                "Machine Learning",
                "Software Engineering",
              ].map((s) => (
                <span
                  key={s}
                  className="px-2 py-0.5 text-xs text-slate-300 bg-slate-700/60 border border-slate-600/50 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/40">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-2">
              Highlights
            </p>
            <ul className="space-y-1 text-xs text-slate-400">
              <li>• Highest marks in C/Java labs (94%)</li>
              <li>• Best project award (KNN implementation)</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "St. Joseph Higher Secondary School",
      subtitle: "Higher Secondary Certificate (HSC) in Science",
      period: "2014 - 2016",
      cgpa: "5.0/5.0",
      stratpoint: 2014,
      content: (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/40">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-2">
              Key Subjects
            </p>
            <div className="flex flex-wrap gap-2">
              {["Mathematics", "Physics", "Chemistry", "Biology", "ICT"].map(
                (s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 text-xs text-slate-300 bg-slate-700/60 border border-slate-600/50 rounded-full"
                  >
                    {s}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/40">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-2">
              Highlights
            </p>
            <ul className="space-y-1 text-xs text-slate-400">
              <li>• Developed basics of programming</li>
              <li>• Perfect GPA in mathematics and physics</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Rowmari C.G. Zaman High School",
      subtitle: "Secondary School Certificate (SSC) in Science",
      period: "2012 - 2014",
      cgpa: "5.0/5.0",
      stratpoint: 2012,
      content: (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/40">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-2">
              Key Subjects
            </p>
            <div className="flex flex-wrap gap-2">
              {["Mathematics", "Physics", "Chemistry", "Biology"].map((s) => (
                <span
                  key={s}
                  className="px-2 py-0.5 text-xs text-slate-300 bg-slate-700/60 border border-slate-600/50 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/40">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-2">
              Highlights
            </p>
            <ul className="space-y-1 text-xs text-slate-400">
              <li>• Govt. scholarship — secured 96% marks</li>
              <li>• Mastered creative question pattern</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-white mb-10 text-center">
        Education Timeline
        <div className="mt-2 w-10 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mx-auto" />
      </h2>

      <div
        className="relative md:pl-20 space-y-8
                before:hidden md:before:block before:absolute before:left-3 before:top-0 before:w-0.5 before:h-full before:bg-linear-to-b before:from-cyan-400/40 before:to-blue-500/20"
      >
        {educationData.map((item, index) => (
          <div key={index} className="relative group">
            {/* Timeline dot — desktop */}
            <div className="hidden md:flex absolute -left-17 top-6 w-7 h-7 rounded-full bg-slate-800 border-2 border-cyan-400/60 items-center justify-center group-hover:border-cyan-400 transition-colors duration-200">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" />
            </div>

            {/* Year badge — mobile */}
            <div className="md:hidden flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400/60 border border-cyan-400" />
              <span className="text-xs font-medium text-cyan-400">
                {item.stratpoint}
              </span>
            </div>

            <InformationCard
              title={item.title}
              subtitleInfo={`${item.subtitle} | ${item.period}`}
              cgpa={item.cgpa}
            >
              {item.content}
            </InformationCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

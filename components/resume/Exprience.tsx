"use client";
import {
  BriefcaseIcon,
  CalendarIcon,
  CodeBracketIcon,
  CpuChipIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const experiences = [
  {
    company: "Live Media Ltd",
    role: "Full Stack Webapp Developer",
    duration: "Apr 2025 – Apr 2026",
    achievements: [
      "Developed and deployed scalable production-ready full-stack applications using Next.js, React, Node.js, and Express.js",
      "Designed and optimized scalable RESTful APIs with focus on performance, maintainability, and reliability",
      "Implemented secure authentication and authorization workflows using JWT",
      "Advanced frontend state management using Redux, Zustand, and Context API for scalable applications",
      "Optimized database schemas and complex queries using MySQL and MongoDB",
      "Led real-time messaging system development from database design to backend implementation",
      "Maintained and refactored legacy React class component codebases into modern maintainable structures",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "JWT",
      "Redux",
      "Zustand",
    ],
  },
  {
    company: "Live Media Ltd",
    role: "Junior Programmer",
    duration: "Feb 2024 – Mar 2025",
    achievements: [
      "Gathered and analyzed software requirements for scalable web applications",
      "Designed application architecture and reusable UI components using React.js",
      "Built and maintained RESTful APIs using Node.js and Express.js",
      "Contributed to frontend and backend features following clean code and modular architecture principles",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
];

const notableWorks = [
  {
    name: "StarZone",
    role: "Full Stack Developer",
    contribution:
      "Subscription-based entertainment portal — upgraded backend, improved security, implemented live streaming features.",
    performance: "~45% faster load time",
    link: "http://starzone.mobi",
  },
  {
    name: "Azrapay",
    role: "Full Stack Developer",
    contribution:
      "Mobile top-up platform — built APIs, integrated third-party services, handled async requests.",
    performance: "~35% API response boost",
    link: "https://azrapay.com",
  },
  // {
  //   name: "Lekhar Poka",
  //   role: "Junior Programmer",
  //   contribution:
  //     "Publishing platform for posts and audiobooks — developed frontend features, integrated REST APIs and SSLcommerce billing.",
  //   performance: "~30% page load improvement",
  //   link: "https://lekharpoka.example.com",
  // },
  {
    name: "Cinematic",
    role: "Junior Programmer",
    contribution:
      "OTT video streaming platform — led migration from Node.js 14 to Node.js 24, refactored UI from Styled Components to Tailwind CSS, resolved legacy dependency issues, and improved application scalability and maintainability.",
    performance: "~30% faster rendering performance",
    link: "https://cinematic.mobi",
  },
  {
    name: "MComics",
    role: "Full Stack Developer",
    contribution:
      "Subscription-based video content portal for kids — upgraded Node.js and React versions, converted styled-components to modern React components with Tailwind CSS.",
    performance: "~25% render performance gain",
    link: "http://mcomics.mobi",
  },
  {
    name: "Medico",
    role: "Junior Programmer",
    contribution:
      "Telemedicine and digital healthcare platform — integrated WebSockets, upgraded styled-components to modern React components, improved user experience and integrated Tailwind CSS.",
    performance: "~40% UX & load improvement",
    link: "https://medico.bio/login",
  },
];

const ExperienceLayout = () => {
  const startDate = new Date("2024-02-18");
  const totalMonths = Math.floor(
    (new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30),
  );
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return (
    <div className="py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-2xl font-bold text-white">
          Work Experience
          <div className="mt-1.5 w-10 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full" />
        </h2>
        <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 px-4 py-1.5 rounded-full self-start sm:self-auto">
          <CalendarIcon className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-400 font-medium">
            {years}y {months}m industry experience
          </span>
        </div>
      </div>

      {/* Germany info */}
      <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-400">
        <span>🎓 M.Eng @ Hochschule Harz, Germany</span>
        <span className="hidden sm:inline text-slate-600">•</span>
        <span>💼 Open to Werkstudent roles</span>
        <span className="hidden sm:inline text-slate-600">•</span>
        <span>🗣 English fluent, German A1(Learning)</span>
      </div>

      {/* Experience cards */}
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 space-y-5"
          >
            {/* Role header */}
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-cyan-400/10 border border-cyan-400/20 rounded-lg shrink-0">
                <BriefcaseIcon className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-white">
                  {exp.company}
                </h3>
                <p className="text-cyan-400/80 text-sm font-medium">
                  {exp.role}
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <CalendarIcon className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-xs text-slate-500">{exp.duration}</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                <CpuChipIcon className="w-4 h-4" /> Key Contributions
              </h4>
              <ul className="space-y-1.5">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-slate-300">
                    <div className="w-1 h-1 bg-cyan-400/60 rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Notable Works — all projects grouped */}
      <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 space-y-5">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <CodeBracketIcon className="w-5 h-5 text-cyan-400" />
          Notable Works
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {notableWorks.map((project, i) => (
            <div
              key={i}
              className="group bg-slate-700/30 rounded-lg border border-slate-600/40 p-4 flex flex-col gap-3 hover:border-cyan-400/30 transition-colors duration-200"
            >
              {/* Name + role */}
              <div className="flex items-start justify-between gap-2">
                <h5 className="font-bold text-white text-sm leading-snug">
                  {project.name}
                </h5>
                {/* <span className="text-xs text-cyan-400/70 bg-cyan-400/10 border border-cyan-400/20 px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                  {project.role}
                </span> */}
              </div>

              {/* Contribution */}
              <p className="text-slate-400 text-xs leading-relaxed flex-1 text-justify">
                {project.contribution}
              </p>

              {/* Footer — performance + live link */}
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-600/40">
                <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                  ↑ {project.performance}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-400 transition-colors duration-150"
                >
                  Live site
                  <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          {
            label: "Projects Delivered",
            value: "15+",
            sub: "Production-grade",
          },
          { label: "System Expertise", value: "MERN", sub: "Full-stack" },
          { label: "Architecture", value: "APIs", sub: "Scalable backend" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center"
          >
            <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
            <p className="text-white text-sm font-medium mt-1">{stat.label}</p>
            <p className="text-slate-500 text-xs">{stat.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceLayout;

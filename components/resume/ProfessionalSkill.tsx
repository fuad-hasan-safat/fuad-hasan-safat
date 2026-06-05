import { CodeBracketIcon, CpuChipIcon, ServerIcon, CommandLineIcon, PaintBrushIcon } from "@heroicons/react/24/outline";
import { RiReactjsLine } from "@remixicon/react";

const ProfessionalSkill = () => {
  const skills = [
    {
      name: "Node.js",
      icon: <CodeBracketIcon className="w-5 h-5" />,
      description: "Scalable backend services and RESTful APIs",
      category: "Backend",
      techs: ["Express", "NestJS", "Socket.io", "Jest", "Mongoose", "Sequelize"],
    },
    {
      name: "React Ecosystem",
      icon: <RiReactjsLine className="w-5 h-5" />,
      description: "Modern frontend development with React",
      category: "Frontend",
      techs: ["Next.js", "Redux", "React Query", "React Router", "React Hook Form"],
    },
    {
      name: "Server-Side Rendering",
      icon: <ServerIcon className="w-5 h-5" />,
      description: "SSR/SSG for optimal performance",
      category: "Architecture",
      techs: ["Next.js", "OG tags", "SEO"],
    },
    {
      name: "State Management",
      icon: <CommandLineIcon className="w-5 h-5" />,
      description: "Complex state handling solutions",
      category: "Frontend",
      techs: ["Redux Toolkit", "Zustand", "Context API"],
    },
    {
      name: "UI/UX Design",
      icon: <PaintBrushIcon className="w-5 h-5" />,
      description: "User-focused interface design",
      category: "Design",
      techs: ["Figma", "Tailwind CSS", "Framer Motion"],
    },
    {
      name: "Performance",
      icon: <CpuChipIcon className="w-5 h-5" />,
      description: "Cloud infrastructure and deployment",
      category: "DevOps",
      techs: ["Node.js Cluster", "PM2", "Next.js optimizations"],
    },
  ];

  const specializations = ["Full-Stack Development", "SPA/PWA Architecture", "Performance Optimization"];
  const concepts = ["Server-Side Rendering", "State Management", "Multithreading/Cluster", "Microservices", "GraphQL"];

  return (
    <div className="py-8 space-y-8">
      <h2 className="text-2xl font-bold text-white">
        Technical Skills
        <div className="mt-1.5 w-10 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full" />
      </h2>

      {/* Skill cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 p-5 hover:border-cyan-400/30 transition-colors duration-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-cyan-400/10 border border-cyan-400/20 rounded-lg text-cyan-400">
                {skill.icon}
              </div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{skill.category}</span>
            </div>
            <h3 className="text-base font-bold text-white mb-1">{skill.name}</h3>
            <p className="text-slate-400 text-xs mb-4 leading-relaxed">{skill.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {skill.techs.map((tech, i) => (
                <span key={i} className="px-2 py-0.5 text-xs text-cyan-400/80 bg-slate-700/50 border border-slate-600/50 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Specializations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 p-5">
          <h3 className="text-sm font-semibold text-white mb-3">Core Specializations</h3>
          <div className="flex flex-wrap gap-2">
            {specializations.map((s, i) => (
              <span key={i} className="px-3 py-1 text-xs text-slate-300 bg-slate-700/50 border border-slate-600/50 rounded-full">{s}</span>
            ))}
          </div>
        </div>
        <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 p-5">
          <h3 className="text-sm font-semibold text-white mb-3">Advanced Concepts</h3>
          <div className="flex flex-wrap gap-2">
            {concepts.map((c, i) => (
              <span key={i} className="px-3 py-1 text-xs text-slate-300 bg-slate-700/50 border border-slate-600/50 rounded-full">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSkill;

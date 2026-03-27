// ProfessionalSkill.tsx
import React from "react";
import { CodeBracketIcon, CpuChipIcon, ServerIcon, CommandLineIcon, PaintBrushIcon } from "@heroicons/react/24/outline";
import { RiReactjsLine } from "@remixicon/react";

const ProfessionalSkill = () => {
  const skills = [
    {
      name: "Node.js",
      icon: <CodeBracketIcon className="w-6 h-6" />,
      description: "Building scalable backend services and RESTful APIs",
      category: "Backend",
      techs: ["Express", "NestJS", "Socket.io", "Jest", "Mongoose", "Sequelize"],
    },
    {
      name: "React Ecosystem",
      icon: <RiReactjsLine className="w-6 h-6" />,
      description: "Modern frontend development with React ecosystem",
      techs: ["Next.js", "Redux", "React Query", "React Router", "React Hook Form", "HOC"],
      category: "Frontend"
    },
    {
      name: "Server-Side Rendering",
      icon: <ServerIcon className="w-6 h-6" />,
      description: "SSR/SSG implementations for optimal performance",
      techs: ["Next.js", "OG tags", "SEO"],
      category: "Architecture"
    },
    {
      name: "State Management",
      icon: <CommandLineIcon className="w-6 h-6" />,
      description: "Complex state handling solutions",
      techs: ["Redux Toolkit", "Zustand", "Context API"],
      category: "Frontend"
    },
    {
      name: "UI/UX Design",
      icon: <PaintBrushIcon className="w-6 h-6" />,
      description: "Creating webpages from scratch with a focus on user experience",
      techs: ["Figma", "Tailwind CSS", "Framer Motion"],
      category: "Design"
    },
    {
      name: "Performance Optimization",
      icon: <CpuChipIcon className="w-6 h-6" />,
      description: "Cloud infrastructure and deployment",
      techs: ["Node.js", "Next.js", "Cluster", "PM2"],
      category: "Performance"
    }
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Technical Arsenal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              {/* Icon & Category */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                  {skill.icon}
                </div>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {skill.category}
                </span>
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">
                {skill.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specialization Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Specializations</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">Full-Stack Development</span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">SPA/PWA Architecture</span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">Performance Optimization</span>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Concepts</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">Server-Side Rendering</span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">State Management</span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">Multithreading/Cluster</span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">Microservices</span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">GraphQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSkill;
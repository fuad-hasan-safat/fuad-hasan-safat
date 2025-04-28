import React from "react";
import { CodeBracketIcon, CpuChipIcon, ServerIcon, CommandLineIcon, PaintBrushIcon } from "@heroicons/react/24/outline";
import { RiReactjsLine } from "@remixicon/react";

const ProfessionalSkill = () => {
    const skills = [
        {
          name: "Node.js",
          icon: <CodeBracketIcon className="w-8 h-8" />,
          description: "Building scalable backend services and RESTful APIs",
          category: "Backend",
          techs: ["Express", "NestJS", "Socket.io", "Jest", "Mongoose", "Sequelize"],
        },
        {
          name: "React Ecosystem",
          icon: <RiReactjsLine className="w-8 h-8" />,
          description: "Modern frontend development with React ecosystem",
          techs: ["Next.js", "Redux", "React Query", "React Router", "React Hook Form", "ROC"],
          category: "Frontend"
        },
        {
          name: "Server-Side Rendering",
          icon: <ServerIcon className="w-8 h-8" />,
          description: "SSR/SSG implementations for optimal performance",
          techs: ["Next.js", "OG tags", "SEO"],
          category: "Architecture"
        },
        {
          name: "State Management",
          icon: <CommandLineIcon className="w-8 h-8" />,
          description: "Complex state handling solutions",
          techs: ["Redux Toolkit", "Zustand", "Context API"],
          category: "Frontend"
        },
        {
          name: "UI/UX Design",
          icon: <PaintBrushIcon className="w-8 h-8" />,
          description: "Creating webpages from scratch with a focus on user experience",
          techs: ["Figma", "Tailwind CSS", "Framer Motion"],
          category: "Design"
        },
        {
          name: "Performance Optimization",
          icon: <CpuChipIcon className="w-8 h-8" />,
          description: "Cloud infrastructure and deployment",
          techs: ["Node.js", "Next.js", "Cluster", "PM2"],
          category: "Performance"
        }
      ];
    
      return (
        <div className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Technical Arsenal
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100 overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-2 pattern-opacity-20" />
                  </div>
                  
                  {/* Main Content */}
                  <div className="relative z-10">
                    {/* Icon & Category */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {skill.category}
                      </span>
                    </div>
    
                    {/* Skill Name */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {skill.name}
                    </h3>
    
                    {/* Description */}
                    <p className="text-gray-600 mb-6">
                      {skill.description}
                    </p>
    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {skill.techs.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
    
                  {/* Hover Effect Decoration */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200/50 transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
    
            {/* Specialization Section */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Core Specializations</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/10 rounded-full">Full-Stack Development</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full">SPA/PWA Architecture</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full">Performance Optimization</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Advanced Concepts</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/10 rounded-full">Server-Side Rendering</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full">State Management</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full">Multithreading/Cluster</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full">Microservices</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full">GraphQL</span>
                  {/* <span className="px-4 py-2 bg-white/10 rounded-full">CI/CD Pipelines</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
export default ProfessionalSkill;

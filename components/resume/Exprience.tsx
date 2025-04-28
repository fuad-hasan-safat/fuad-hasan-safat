// ExperienceShowcase.tsx
import React from "react";
import { BriefcaseIcon, CalendarIcon, CodeBracketIcon, ChartBarIcon, CpuChipIcon } from "@heroicons/react/24/outline";

const ExprienceLayout = () => {
    const experiences = [
        {
          company: "Live Media Ltd",
          role: "Full-Stack Developer",
          duration: "February 2024 - Present", // Updated duration format 2024 - Present · 1 yr 4 mos",
          location: "Dhaka, Bangladesh",
          achievements: [
            "Developed and maintained 2 enterprise backend services + 1 microservices using Node.js and NestJS",
            "Led frontend development for 3 enterprise React(Next) applications",
            "Implemented Cluster and PM2 for Node.js applications",
            "Optimized performance of existing applications, achieving 40% faster response times",
            "Mentored 2 junior developers in modern web practices"
          ],
          technologies: ["React","Next.js" , "Node.js", "Redux", "TypeScript", "MongoDB", "MySQL"],
          projects: [
            { name: "ERP System", contribution: "Led dashboard module development" },
            { name: "Web Application", contribution: "Built both frontend & backend modules for Lekharpoka" },
            { name: "Microservice API", contribution: "Designed and developed RESTful APIs for Azrapay" }
          ]
        }
      ];
    
      return (
        <div className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Professional Journey
              </h2>
              <div className="inline-flex items-center bg-blue-100 px-6 py-2 rounded-full">
                <CalendarIcon className="w-5 h-5 mr-2 text-blue-600" />
                <span className="text-lg font-medium text-blue-700">
                  1 Year 4 Months of Building Digital Solutions
                </span>
              </div>
            </div>
    
            <div className="relative pl-8 space-y-12 before:absolute before:w-1 before:h-full before:bg-gradient-to-b before:from-blue-200 before:to-cyan-200 before:left-0 before:rounded-full">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative group pl-8"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-6 -translate-x-[29px] w-5 h-5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full ring-4 ring-white" />
    
                  {/* Experience Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100">
                    {/* Company Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <BriefcaseIcon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                        <p className="text-gray-600">{exp.role}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <CalendarIcon className="w-5 h-5 text-gray-500" />
                          <span className="text-gray-600">{exp.duration}</span>
                        </div>
                      </div>
                    </div>
    
                    {/* Key Achievements */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <ChartBarIcon className="w-6 h-6 text-green-500" />
                        Key Contributions
                      </h4>
                      <ul className="space-y-3 pl-2">
                        {exp.achievements.map((achievement, i) => (
                          <li 
                            key={i}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
    
                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <CpuChipIcon className="w-6 h-6 text-purple-500" />
                        Core Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
    
                    {/* Projects */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <CodeBracketIcon className="w-6 h-6 text-orange-500" />
                        Notable Projects
                      </h4>
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {exp.projects.map((project, i) => (
                          <div 
                            key={i}
                            className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors"
                          >
                            <h5 className="font-semibold text-gray-900">{project.name}</h5>
                            <p className=" text-gray-600 mt-1 text-xs ">{project.contribution}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
    
            {/* Experience Summary */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Projects Delivered</h3>
                <div className="text-4xl font-bold">3+</div>
                <p className="opacity-90">Production-grade applications</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Code Contributions</h3>
                <div className="text-4xl font-bold">50K+</div>
                <p className="opacity-90">Lines of meaningful code</p>
              </div>
    
              <div className="bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Performance Gain</h3>
                <div className="text-4xl font-bold">40%</div>
                <p className="opacity-90">Average efficiency improvement</p>
              </div>
            </div>
          </div>
        </div>
      );
    };
    

export default ExprienceLayout;

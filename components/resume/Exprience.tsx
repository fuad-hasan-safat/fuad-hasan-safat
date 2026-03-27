"use client";
import React from "react";
import {
  BriefcaseIcon,
  CalendarIcon,
  CodeBracketIcon,
  ChartBarIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const ExperienceLayout = () => {
  const experiences = [
    {
      company: "Live Media Ltd",
      role: "Full-Stack Developer",
      duration: "Apr 2025 – Present",
      location: "Dhaka, Bangladesh",
      achievements: [
        "Develop and maintain scalable backend systems and microservices using Node.js and NestJS",
        "Design secure REST APIs with JWT authentication, RBAC, and session validation",
        "Implement real-time features using WebSockets (live quizzes, engagement systems)",
        "Lead frontend development for production-grade applications using React and Next.js",
        "Architect CMS modules for dynamic content (audio, video, publishing systems)",
        "Improve system performance by ~40% through optimization and refactoring",
        "Deploy and manage applications using PM2 clustering for scalability",
        "Mentor junior developers and contribute to code reviews"
      ],
      technologies: [
        "React", "Next.js", "TypeScript",
        "Node.js", "NestJS", "Express.js",
        "MongoDB", "MySQL",
        "WebSockets", "JWT", "RBAC",
        "Redux Toolkit", "Zustand",
        "PM2", "Docker"
      ],
      projects: [
        {
          name: "Showbiz Platform",
          contribution:
            "Built full system including backend architecture, CMS dashboard, and real-time features"
        },
        {
          name: "StarZone Streaming Platform",
          contribution:
            "Enhanced backend security, subscription system, and live streaming features"
        },
        {
          name: "FlowBoard SaaS",
          contribution:
            "Developed real-time multi-tenant system with WebSockets"
        },
        {
          name: "Azrapay Microservices",
          contribution:
            "Designed APIs, handled async processing, and integrated third-party services"
        }
      ]
    },
    {
      company: "Live Media Ltd",
      role: "Junior Programmer",
      duration: "Feb 2024 – Apr 2025",
      location: "Dhaka, Bangladesh",
      achievements: [
        "Supported frontend development using React and Next.js",
        "Built reusable UI components and improved page performance",
        "Integrated backend APIs into frontend applications",
        "Assisted in CMS feature development and debugging",
        "Participated in code reviews and agile team collaboration",
        "Optimized UI rendering and user experience"
      ],
      technologies: [
        "React", "Next.js", "JavaScript",
        "Redux", "HTML", "Tailwind CSS"
      ],
      projects: [
        {
          name: "Lekhar Poka",
          contribution:
            "Developed frontend features and integrated REST APIs"
        }
      ]
    }
  ];

  const startDate = new Date("2024-02-18");
  const totalMonths = Math.floor(
    (new Date().getTime() - startDate.getTime()) /
      (1000 * 60 * 60 * 24 * 30)
  );
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Professional Experience (Scalable Systems & Production Applications)
          </h2>

          <div className="inline-flex items-center bg-gray-100 px-4 py-2 rounded-full">
            <CalendarIcon className="w-5 h-5 mr-2 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              {years} Year {months} Months of Industry Experience
            </span>
          </div>

          {/* Germany Readiness */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
            <p className="text-gray-700 text-sm">
              🎓 Incoming MSc Student in Germany (Harz University) • 💼 Open to Werkstudent Roles • 🗣 English Fluent, German Learning
            </p>
          </div>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <BriefcaseIcon className="w-6 h-6 text-gray-600" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.company}
                  </h3>
                  <p className="text-gray-600">{exp.role}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <CalendarIcon className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">
                      {exp.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <ChartBarIcon className="w-5 h-5 text-green-500" />
                  Key Contributions
                </h4>

                <ul className="space-y-2 pl-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CpuChipIcon className="w-5 h-5 text-purple-500" />
                  Core Technologies
                </h4>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CodeBracketIcon className="w-5 h-5 text-orange-500" />
                  Notable Work
                </h4>

                <div className="grid gap-4 md:grid-cols-2">
                  {exp.projects.map((project, i) => (
                    <div
                      key={i}
                      className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <h5 className="font-semibold text-gray-900">
                        {project.name}
                      </h5>
                      <p className="text-gray-600 text-sm mt-1">
                        {project.contribution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Projects Delivered
            </h3>
            <div className="text-3xl font-bold text-blue-600">5+</div>
            <p className="text-gray-600 text-sm">
              Production-grade applications
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              System Expertise
            </h3>
            <div className="text-3xl font-bold text-purple-600">
              APIs & Microservices
            </div>
            <p className="text-gray-600 text-sm">
              Scalable backend architecture
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Performance Gain
            </h3>
            <div className="text-3xl font-bold text-green-600">40%</div>
            <p className="text-gray-600 text-sm">
              Efficiency improvement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceLayout;
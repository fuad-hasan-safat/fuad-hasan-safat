"use client";
import { motion } from "framer-motion";
import ClassicInformationCard from "./ClassicInformationCard";
import { FiBook, FiCode, FiTool, FiAward } from "react-icons/fi";

const experiences = [
  {
    title: "Software Engineer",
    company: "Live Media Ltd.",
    duration: "2024 - Present",
    location: "Dhaka, Bangladesh",
    description: "Led development of enterprise applications using modern web technologies.",
    skills: ["React", "Node.js", "TypeScript", "Multithreading", "Next.js", "MongoDB", "Cluster", "Modular Programming", "OOP", "SOLID"]
  },
];

const education = [
  {
    title: "Computer Science and Engineering",
    institution: "AUST",
    duration: "2017 - 2022",
    description: "Bachelor of Science in Computer Science",
    gpa: "3.3/4.0"
  },
];

const skills = [
  { name: "Frontend", items: ["React", "TypeScript", "HTML5", "CSS3"] },
  { name: "Backend", items: ["Node.js", "Python", "REST APIs", "SQL", "MongoDB", "RestfulAPi", "GraphQl"] },
  { name: "Tools", items: ["Git", "AWS", "Figma"] }
];

export default function ClassicResume() {
  return (
    <section className="bg-slate-50 px-4 sm:px-8 lg:px-16 py-20 font-sans text-slate-800">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="gap-8 grid md:grid-cols-3"
        >
          {/* Main Content */}
          <div className="space-y-8 md:col-span-2">
            <motion.div 
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="flex items-center gap-4 pb-4 border-slate-300 border-b-2"
            >
              <FiCode className="w-8 h-8 text-slate-800" />
              <h2 className="font-serif font-semibold text-slate-800 text-3xl">
                Professional Experience
              </h2>
            </motion.div>

            {experiences.map((exp, index) => (
              <ClassicInformationCard
                key={index}
                title={exp.title}
                subtitle={`${exp.company} | ${exp.duration}`}
                location={exp.location}
                className="bg-white shadow-sm hover:shadow-md p-6 border border-slate-200 rounded-xl transition-shadow"
              >
                <p className="mb-4 text-slate-600 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ y: -2 }}
                      className="bg-gray-100 px-3 py-1 rounded-full font-medium text-gray-700 text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </ClassicInformationCard>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-white shadow-sm p-6 border border-slate-200 rounded-xl">
              <motion.div 
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                className="flex items-center gap-3 mb-6 pb-4 border-slate-200 border-b"
              >
                <FiBook className="w-6 h-6 text-gray-400" />
                <h3 className="font-serif text-slate-800 text-2xl">Education</h3>
              </motion.div>
              {education.map((edu, index) => (
                <ClassicInformationCard
                  key={index}
                  title={edu.institution}
                  subtitle={edu.title}
                  duration={edu.duration}
                  gpa={edu.gpa}
                  className="bg-slate-50 mb-4 p-4 rounded-lg"
                >
                  <p className="text-slate-600 text-sm">{edu.description}</p>
                </ClassicInformationCard>
              ))}
            </div>

            {/* Skills */}
            <div className="bg-white shadow-sm p-6 border border-slate-200 rounded-xl">
              <motion.div 
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                className="flex items-center gap-3 mb-6 pb-4 border-slate-200 border-b"
              >
                <FiAward className="w-6 h-6 text-gray-400" />
                <h3 className="font-serif text-slate-800 text-2xl">Skills</h3>
              </motion.div>
              {skills.map((category, index) => (
                <div key={index} className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FiTool className="w-4 h-4 text-slate-500" />
                    <h4 className="font-medium text-slate-700">{category.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ y: -2 }}
                        className="bg-slate-100 px-3 py-1 rounded-full text-slate-600 text-sm"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";
import ClassicInformationCard from "./ClassicInformationCard";

export default function ClassicResume() {
  return (
    <div className="bg-white p-8 min-h-screen font-serif">
      {/* Header */}
      <header className="mb-12 pb-8 border-b text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 font-bold text-slate-800 text-4xl"
        >
          Fuad Hasan
        </motion.h1>
        <div className="flex justify-center space-x-6 text-slate-600">
          <a href="mailto:fuad@example.com" className="hover:text-blue-600 transition-colors">
            fuad@example.com
          </a>
          <span>•</span>
          <a href="https://linkedin.com/in/fuad" className="hover:text-blue-600 transition-colors">
            LinkedIn
          </a>
          <span>•</span>
          <span>Dhaka, Bangladesh</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl">
        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="mb-8 pb-2 border-b font-bold text-slate-800 text-2xl">
            Professional Experience
          </h2>
          
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <ClassicInformationCard
              title="Senior Software Engineer"
              subtitle="Tech Solutions Ltd."
              duration="2020 - Present"
              location="Dhaka, Bangladesh"
            >
              <ul className="space-y-2 pl-6 text-slate-600 list-disc">
                <li>Led development of enterprise applications using React and Node.js</li>
                <li>Implemented CI/CD pipelines reducing deployment time by 40%</li>
                <li>Mentored junior developers in best practices</li>
              </ul>
            </ClassicInformationCard>
          </motion.div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="mb-8 pb-2 border-b font-bold text-slate-800 text-2xl">
            Education
          </h2>
          
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <ClassicInformationCard
              title="BSc in Computer Science"
              subtitle="University of Dhaka"
              duration="2016 - 2020"
              gpa="3.8/4.0"
            >
              <p className="text-slate-600">
                Relevant coursework: Algorithms, Data Structures, Web Development, Database Systems
              </p>
            </ClassicInformationCard>
          </motion.div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="mb-8 pb-2 border-b font-bold text-slate-800 text-2xl">
            Technical Skills
          </h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="gap-4 grid grid-cols-2 md:grid-cols-3"
          >
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="mb-2 font-semibold">Frontend</h3>
              <p className="text-slate-600">React, HTML5, CSS3, JavaScript</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="mb-2 font-semibold">Backend</h3>
              <p className="text-slate-600">Node.js, Python, REST APIs</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="mb-2 font-semibold">Tools</h3>
              <p className="text-slate-600">Git, Docker, AWS, Jenkins</p>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
"use client";
import { motion } from "framer-motion";
import { FiCode, FiTool, FiBook, FiCoffee } from "react-icons/fi";

export default function CClassicAboutMe() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="gap-12 grid md:grid-cols-3"
        >
          {/* Main Content */}
          <div className="space-y-8 md:col-span-2">
            <div className="space-y-4">
              <h2 className="font-serif font-medium text-slate-800 text-3xl">
                About Me
              </h2>
              <div className="bg-slate-300 w-full h-[2px]" />
              
              <p className="text-slate-600 text-lg leading-relaxed">
                I'm Fuad Hasan, a full-stack developer with 2 years of experience 
                crafting web applications. My passion lies in creating efficient, 
                maintainable solutions that solve real-world problems.
              </p>
            </div>

            {/* Professional Experience */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <FiCode className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-800 text-xl">
                    Current Focus
                  </h3>
                  <p className="text-slate-600">
                    Building scalable applications with modern tech stack
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <FiTool className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-800 text-xl">
                    Technical Approach
                  </h3>
                  <p className="text-slate-600">
                    Clean architecture &amp; performance optimization
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Expertise */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="mb-4 font-medium text-slate-800 text-lg">
                Core Expertise
              </h3>
              <div className="space-y-3">
                {['JavaScript', 'React', 'Node.js', 'TypeScript'].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-slate-400 rounded-full w-2 h-2" />
                    <span className="text-slate-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Interests */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="mb-4 font-medium text-slate-800 text-lg">
                Beyond Coding
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FiBook className="w-5 h-5 text-slate-600" />
                  <span className="text-slate-600">Technical reading</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCoffee className="w-5 h-5 text-slate-600" />
                  <span className="text-slate-600">Coffee enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 mt-16 p-8 rounded-lg text-center"
        >
          <blockquote className="mx-auto max-w-2xl text-slate-600 text-xl italic">
            "Good code is its own best documentation. Focus on writing clear, 
            maintainable solutions that stand the test of time."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
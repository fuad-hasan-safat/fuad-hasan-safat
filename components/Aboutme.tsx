import React from 'react';
import HighlightWords from './HighlightWords';

export default function AboutMe() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="relative bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 lg:p-16 border-8 border-indigo-50/60 backdrop-blur-sm overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-5 bg-[url('/noise.png')]" />
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl" />

                {/* Content Container */}
                <div className="relative z-10 space-y-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        About Fuad
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Text Content */}
                        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                            <HighlightWords
                                highlightWords={['Fuad Hasan', 'Software Developer', 'Next.js', 'React', 'Node.js', 'Redux', 'Bun', 'Elysia.js', 'Associate Software Engineer', 'Live Media Ltd']}
                                highlightClassName="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent font-semibold"
                            >
                                <div className="space-y-6">
                                    <p className="text-xl">
                                        👋 Hello! I'm <strong>Fuad Hasan</strong>, a full-stack developer with 2+ years of professional experience building scalable web applications using MERN and NestJS.

                                        I will be pursuing my MSc in Innovation & Technology Management at Harz University, Germany, and I am actively seeking Werkstudent (part-time) opportunities where I can contribute to real-world engineering teams.
                                    </p>

                                    <div className="p-6 bg-indigo-50/30 rounded-xl border border-indigo-100">
                                        <h3 className="text-lg font-semibold text-indigo-600 mb-3">Professional Focus</h3>
                                        <p>
                                            Currently working as an <strong>Associate Software Engineer @Live Media Ltd</strong>,
                                            where I design and develop scalable backend systems and responsive frontend applications.

                                            My work focuses on clean architecture, API design, performance optimization, and maintainable codebases.
                                        </p>
                                    </div>

                                    <div className="p-6 bg-teal-50/30 rounded-xl border border-teal-100">
                                        <h3 className="text-lg font-semibold text-teal-600 mb-3">Technical Arsenal</h3>
                                        <p>
                                            Core stack: <strong>React / Next.js</strong>, <strong>Node.js</strong>, and <strong>NestJS</strong>.

                                            Experienced in building REST APIs, and scalable systems using MongoDB and MySql.

                                            Strong focus on clean architecture, SOLID principles, and production-ready code.
                                        </p>
                                    </div>

                                </div>
                            </HighlightWords>
                        </div>

                        {/* Personal Side */}
                        <div className="space-y-6">
                            <div className="p-6 bg-amber-50/30 rounded-xl border border-amber-100">
                                <h3 className="text-lg font-semibold text-amber-600 mb-3">Beyond Code</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    🌿 Plant enthusiast nurturing a small indoor jungle<br />
                                    📚 Constant learner exploring new tech frontiers<br />
                                    🎨 Appreciator of good design and user experiences<br />
                                    ☕️ Coffee-fueled coding sessions enthusiast
                                </p>
                            </div>

                            <div className="p-6 bg-blue-50/30 rounded-xl border border-blue-100">
                                <h3 className="text-lg font-semibold text-blue-600 mb-3">Work Eligibility</h3>
                                <p>
                                    📍 Relocating to Germany (Harz University)<br />
                                    🎓 MSc in Innovation & Technology Management<br />
                                    💼 Open to Werkstudent (part-time) roles<br />
                                    🗣 English (Fluent), German (Learning)
                                </p>
                            </div>

                            <div className="p-6 bg-pink-50/30 rounded-xl border border-pink-100">
                                <h3 className="text-lg font-semibold text-pink-600 mb-3">Collaboration</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    💡 Strong problem-solving mindset with focus on real-world impact<br />
                                    🤝 Experience working in collaborative environments<br />
                                    🚀 Comfortable contributing to production systems and team workflows
                                </p>
                                <button
                                    onClick={() => window.open('https://www.linkedin.com/in/fuad-hasan-safat/', '_blank')}
                                    className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow">
                                    Let&apos;s Connect →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
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
                                        👋 Hello! I&apos;m <strong>Fuad Hasan</strong>, a dedicated full-stack developer 
                                        with a strong passion for specializing in crafting high-performance web applications with modern technologies.
                                    </p>

                                    <div className="p-6 bg-indigo-50/30 rounded-xl border border-indigo-100">
                                        <h3 className="text-lg font-semibold text-indigo-600 mb-3">Professional Focus</h3>
                                        <p>
                                            Currently shaping digital experiences as an <strong>Associate Software Engineer 
                                            @Live Media Ltd</strong>, focusing on optimizing both frontend and backend systems 
                                                with a focus on performance for maximum efficiency and user satisfaction.
                                        </p>
                                    </div>

                                    <div className="p-6 bg-teal-50/30 rounded-xl border border-teal-100">
                                        <h3 className="text-lg font-semibold text-teal-600 mb-3">Technical Arsenal</h3>
                                        <p>
                                            Core stack: <strong>Next.js</strong>, <strong>React</strong>, <strong>Node.js</strong>, and <strong>Elysia.js</strong>. Specializing in building scalable architectures and smooth state management with <strong>Redux</strong>.
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
                                    🌿 Plant enthusiast nurturing a small indoor jungle<br/>
                                    📚 Constant learner exploring new tech frontiers<br/>
                                    🎨 Appreciator of good design and user experiences<br/>
                                    ☕️ Coffee-fueled coding sessions enthusiast
                                </p>
                            </div>

                            <div className="p-6 bg-pink-50/30 rounded-xl border border-pink-100">
                                <h3 className="text-lg font-semibold text-pink-600 mb-3">Collaboration</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    💡 Passionate about solving real-world problems through code<br/>
                                    🤝 Believe in collaborative, user-centric development<br/>
                                    🚀 Always excited for new challenges and opportunities
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
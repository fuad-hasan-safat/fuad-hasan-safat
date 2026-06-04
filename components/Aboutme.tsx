"use client";
import HighlightWords from './HighlightWords';

const highlights = ['Fuad Hasan', 'Next.js', 'React', 'Node.js', 'NestJS', 'Associate Software Engineer', 'Live Media Ltd', 'Harz University'];

export default function AboutMe() {
    return (
        <div className="space-y-10 w-full">
            {/* Header */}
            <div className="text-center space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    About Fuad
                </h2>
                <p className="text-slate-400 text-lg">Full-Stack Engineer · MSc Student · Open to Werkstudent Roles</p>
            </div>

            {/* Main layout */}
            <div className="grid md:grid-cols-5 gap-6">
                {/* Left — bio */}
                <div className="md:col-span-3 space-y-5">
                    <p className="text-slate-300 text-base leading-relaxed">
                        <HighlightWords
                            highlightWords={highlights}
                            highlightClassName="text-cyan-400 font-semibold"
                        >
                            {`Hello! I'm Fuad Hasan, a full-stack developer with 2+ years of professional experience building scalable web applications. I work as an Associate Software Engineer at Live Media Ltd, designing backend systems and responsive frontend applications with a focus on clean architecture and performance. I'm currently pursuing my MSc at Harz University, Germany, and actively seeking Werkstudent opportunities to contribute to real-world engineering teams.`}
                        </HighlightWords>
                    </p>

                    {/* Professional Focus */}
                    <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 p-5 space-y-2">
                        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">Professional Focus</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Designing and building scalable full-stack systems — from RESTful API architecture and database optimization to responsive, accessible frontends. Strong focus on clean code, SOLID principles, and production-grade reliability.
                        </p>
                    </div>

                    {/* Technical Stack */}
                    <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 p-5 space-y-3">
                        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">Core Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {['React / Next.js', 'Node.js', 'NestJS', 'MongoDB', 'MySQL', 'Redux', 'TypeScript', 'REST APIs'].map((tech) => (
                                <span key={tech} className="px-3 py-1 text-xs text-cyan-400/80 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right — info cards */}
                <div className="md:col-span-2 space-y-4">
                    {/* Work Eligibility */}
                    <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 p-5 space-y-3">
                        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">Work Eligibility</h3>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li className="flex items-start gap-2"><span>📍</span> Harz, Germany (Hochschule Harz)</li>
                            <li className="flex items-start gap-2"><span>🎓</span> MSc in Innovation & Technology Management</li>
                            <li className="flex items-start gap-2"><span>💼</span> Open to Werkstudent (part-time) roles</li>
                            <li className="flex items-start gap-2"><span>🗣</span> English (Fluent), German (A1, Learning)</li>
                        </ul>
                    </div>

                    {/* Beyond Code */}
                    <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 p-5 space-y-3">
                        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">Beyond Code</h3>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li className="flex items-start gap-2"><span>🌿</span> Nurturing a small indoor plant collection</li>
                            <li className="flex items-start gap-2"><span>📚</span> Constant learner, exploring new tech frontiers</li>
                            <li className="flex items-start gap-2"><span>🎨</span> Appreciator of good design and UX</li>
                            <li className="flex items-start gap-2"><span>☕</span> Coffee-fueled late-night coding</li>
                        </ul>
                    </div>

                    {/* Collaboration + CTA */}
                    <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 p-5 space-y-4">
                        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">Collaboration</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Problem-solving mindset, experience in agile teams, and comfortable contributing to production systems from day one.
                        </p>
                        <button
                            onClick={() => window.open('https://www.linkedin.com/in/fuad-hasan-safat/', '_blank')}
                            className="w-full py-2.5 bg-linear-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Let&apos;s Connect →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

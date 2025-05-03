// Education.tsx
import React, { useState, useEffect, useRef } from "react";
import InformationCard from "../InformationCard";

const Education = () => {
    // const educationData = [
    //     {
    //         title: "Ahsanullah University of Science and Technology",
    //         subtitle: "B.Sc. in Computer Science and Engineering",
    //         cgpa: "3.33/4.00",
    //         content: (
    //             <>
    //                 <div className="grid gap-4 md:grid-cols-2">
    //                     <div className="p-4 bg-blue-50 rounded-lg">
    //                         <p className="text-sm text-blue-600 font-semibold mb-2">Key Subjects</p>
    //                         <p className="text-gray-700 text-justify font-mono font-thin text-xs">Computer Science, Data Structures, Algorithms, Software Engineering, Machine Learning, Deep Learning, </p>
    //                     </div>
    //                     <div className="p-4 bg-green-50 rounded-lg">
    //                         <p className="text-sm text-green-600 font-semibold mb-2">Achievements</p>
    //                         <p className="text-gray-700 text-justify font-mono font-thin text-xs">Secured heighst marks on C and Java programming lab, with 94% marks</p>
    //                     </div>
    //                 </div>

    //                 <p className="text-gray-700 text-justify font-mono font-thin text-xs ">
    //                     During my undergraduate studies, I have gained a solid grasp of the fundamental concepts underlying all branches of computer science.
    //                     I have also developed a strong foundation in mathematics, including calculus, linear algebra, and discrete mathematics.
    //                     I have also gained practical experience in software development, including web development, mobile app development, and game development.
    //                 </p>

    //                 <ul className="list-disc pl-6 space-y-2 marker:text-blue-400 text-sm">
    //                     <li>Developed first programming projects in BASIC</li>
    //                     <li>Get heighst bonus marks in distributed database project by implementing KNN.</li>
    //                     <li>Maintained perfect GPA in programming labs and projects</li>
    //                 </ul>
    //             </>
    //         )
    //     },
    //     // Add other education entries here
    //     {
    //         title: "St. Joseph Higher Secondary School",
    //         subtitle: "Higher Secondary Certificate (HSC) in Science",
    //         cgpa: "5.00/5.00",
    //         content: (
    //             <>
    //                 <div className="grid gap-4 md:grid-cols-2">
    //                     <div className="p-4 bg-blue-50 rounded-lg">
    //                         <p className="text-sm text-blue-600 font-semibold mb-2">Key Subjects</p>
    //                         <p className="text-gray-700 text-justify font-mono font-thin text-xs">Mathematics, Physics, Chemistry, Biology, ICT</p>
    //                     </div>
    //                     <div className="p-4 bg-green-50 rounded-lg">
    //                         <p className="text-sm text-green-600 font-semibold mb-2">Achievements</p>
    //                         <p className="text-gray-700 text-justify font-mono font-thin text-xs">Get Golden A+ and secure 91% marks on average</p>
    //                     </div>
    //                 </div>

    //                 <p className="text-gray-700 text-justify font-mono font-thin text-xs">
    //                     Earned my HSC in Science with distinction, developing foundational skills in STEM subjects
    //                     that paved the way for my computer science journey.
    //                 </p>

    //                 <ul className="list-disc pl-6 space-y-2 marker:text-blue-400 text-sm">
    //                     <li>Developed basic of programming</li>
    //                     <li>Awarded Best Science Project for sustainable city management</li>
    //                     <li>Maintained perfect GPA in mathematics and physics</li>
    //                 </ul>
    //             </>
    //         )
    //     },
    //     {
    //         title: "Rowmari C.G. Zaman High School",
    //         subtitle: "Secondary School Certificate (SSC) in Science",
    //         cgpa: "5.00/5.00",
    //         content: (
    //             <>
    //                 <div className="grid gap-4 md:grid-cols-2">
    //                     <div className="p-4 bg-blue-50 rounded-lg">
    //                         <p className="text-sm text-blue-600 font-semibold mb-2">Key Subjects</p>
    //                         <p className="text-gray-700 text-justify font-mono font-thin text-xs">Mathematics, Physics, Chemistry, Biology</p>
    //                     </div>
    //                     <div className="p-4 bg-green-50 rounded-lg">
    //                         <p className="text-sm text-green-600 font-semibold mb-2">Achievements</p>
    //                         <p className="text-gray-700 text-justify font-mono font-thin text-xs">Get Govt. scholarship by securing 96% marks.</p>
    //                     </div>
    //                 </div>

    //                 <p className="text-gray-700 text-justify font-mono font-thin text-xs">
    //                     Earned my SSC in Science with distinction, developing foundational skills in STEM subjects
    //                     that paved the way for my computer science journey.
    //                 </p>

    //                 <ul className="list-disc pl-6 space-y-2 marker:text-blue-400 text-sm">
    //                     <li>Devlop interest for science and technology</li>
    //                     <li>Mastered the creative question pattern</li>
    //                     <li>Got Govt. scholarship</li>
    //                 </ul>
    //             </>
    //         )
    //     },
    // ];


    const educationData = [
        {
            title: "Ahsanullah University of Science and Technology",
            subtitle: "B.Sc. in Computer Science and Engineering",
            period: "2017 - 2022",
            cgpa: "3.33/4.00",
            stratpoint: 2017,
            content: (
                <>
                    <div className="grid gap-4 md:grid-cols-2 mb-4">
                        <div className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                            <p className="text-sm text-blue-600 font-semibold mb-2 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                                Key Subjects
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Data Structures", "Algorithms", "Machine Learning", "Software Engineering"].map((subject) => (
                                    <span key={subject} className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                                        {subject}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="p-4 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                            <p className="text-sm text-green-600 font-semibold mb-2 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                                Achievements
                            </p>
                            <ul className="space-y-1">
                                <li className="text-xs text-gray-600">• Highest marks in C/Java labs (94%)</li>
                                <li className="text-xs text-gray-600">• Best project award (KNN implementation)</li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        },
        // Add other education entries...
        {
            title: "St. Joseph Higher Secondary School",
            subtitle: "Higher Secondary Certificate (HSC) in Science",
            period: "2014 - 2016",
            cgpa: "5.0/5.0",
            stratpoint: 2014,
            content: (
                <>
                    <div className="grid gap-4 md:grid-cols-2 mb-4">
                        <div className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                            <p className="text-sm text-blue-600 font-semibold mb-2 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                                Key Subjects
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Mathematics", "Physics", "Chemistry", "Biology", "ICT"].map((subject) => (
                                    <span key={subject} className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                                        {subject}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="p-4 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                            <p className="text-sm text-green-600 font-semibold mb-2 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                                Achievements
                            </p>
                            <ul className="space-y-1">
                                <li className="text-xs text-gray-600">• Developed basic of programming</li>
                                <li className="text-xs text-gray-600">• Maintained perfect GPA in mathematics and physics</li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        },
        {
            title: "Rowmari C.G. Zaman High School",
            subtitle: "Secondary School Certificate (SSC) in Science",
            period: "2012 - 2014",
            cgpa: "5.0/5.0",
            stratpoint: 2012,
            content: (
                <>
                    <div className="grid gap-4 md:grid-cols-2 mb-4">
                        <div className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                            <p className="text-sm text-blue-600 font-semibold mb-2 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                                Key Subjects
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Mathematics", "Physics", "Chemistry", "Biology"].map((subject) => (
                                    <span key={subject} className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                                        {subject}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="p-4 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                            <p className="text-sm text-green-600 font-semibold mb-2 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                                Achievements
                            </p>
                            <ul className="space-y-1">
                                <li className="text-xs text-gray-600">• Get Govt. scholarship by securing 96% marks.</li>
                                <li className="text-xs text-gray-600">• Mastered the creative question pattern</li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        },
    ];
    const extendedEducation = [...educationData, educationData[0]];
    const totalItems = extendedEducation.length;

    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const timeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (!isHovered) {
            timeoutRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % totalItems);
            }, 5000);
        }
        return () => {
            if (timeoutRef.current) clearInterval(timeoutRef.current);
        };
    }, [isHovered, totalItems]);

    useEffect(() => {
        if (activeIndex === totalItems - 1) {
            // When reaching the clone, reset to 0 after animation
            setTimeout(() => {
                setTransitionEnabled(false);
                setActiveIndex(0);
                setTimeout(() => setTransitionEnabled(true), 20);
            }, 500);
        }
    }, [activeIndex, totalItems]);

    return (
        <div className="relative py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                    Education Timeline
                    <div className="mt-2 w-12 h-1 bg-blue-500 rounded-full mx-auto" />
                </h2>

                <div className="relative pl-8 sm:pl-24 md:pl-36 space-y-16 before:absolute before:left-0 sm:before:left-[12%] before:top-0 before:w-[2px] before:h-full before:bg-gradient-to-b from-blue-400/50 to-cyan-300/50 before:shadow-[0_0_15px_3px_rgba(96,165,250,0.15)]">
                    {educationData.map((item, index) => (
                        <div
                            key={index}
                            className="relative group"
                        >
                            {/* Animated Timeline Marker */}
                            <div className="absolute left-0 sm:-left-20 -ml-4 mt-6 flex items-center justify-center">
                                <div className="relative group">
                                    {/* Main marker with interactive border */}
                                    <div className="w-8 h-8 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center 
            transition-all duration-300 hover:bg-blue-50 hover:scale-110 hover:shadow-md
            before:absolute before:-inset-2 before:rounded-full before:border-2 before:border-blue-100 before:opacity-0 
            before:hover:opacity-100 before:transition-opacity">

                                        {/* Animated center dot */}
                                        <div className="w-2 h-2 bg-blue-600 rounded-full transition-transform duration-300 
                group-hover:scale-150 group-hover:bg-cyan-500" />

                                        {/* Year indicator appear on hover */}
                                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-blue-600 
                opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                            {item.stratpoint}➔
                                        </span>
                                    </div>

                                    {/* Subtle connection line */}
                                    <div className="absolute top-8 left-1/2 w-0.5 h-12 bg-gradient-to-b from-blue-200 to-transparent" />
                                </div>
                            </div>
                            {/* Dynamic Connector Line */}
                            <div className="absolute left-0 sm:-left-20 w-[2px] h-16 -bottom-16 bg-gradient-to-b from-cyan-300/50 to-blue-400/50 group-hover:from-cyan-300 group-hover:to-blue-400 transition-colors" />

                            {/* Glowing Card Container */}
                            <div className="relative transform transition-all duration-500 hover:-translate-y-2 
                before:absolute before:-inset-1 before:bg-gradient-to-r before:from-blue-400/20 before:to-cyan-300/20 before:rounded-xl before:opacity-0 group-hover:before:opacity-100 before:transition-opacity">
                                <InformationCard
                                    title={item.title}
                                    subtitleInfo={
                                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                            {`${item.subtitle} | ${item.period}`}
                                        </span>
                                    }
                                    cgpa={item.cgpa}
                                    className="relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200/70 hover:border-blue-200/50 transition-all" // Add className prop to InformationCard
                                >
                                    <div className="absolute top-0 -left-6 h-full w-1 bg-gradient-to-b from-blue-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    {item.content}
                                </InformationCard>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
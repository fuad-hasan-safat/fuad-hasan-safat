// Education.tsx
import React, { useState, useEffect, useRef } from "react";
import InformationCard from "../InformationCard";

const Education = () => {
    const educationData = [
        {
            title: "Ahsanullah University of Science and Technology",
            subtitle: "B.Sc. in Computer Science and Engineering",
            cgpa: "3.33/4.00",
            content: (
                <>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <p className="text-sm text-blue-600 font-semibold mb-2">Key Subjects</p>
                            <p className="text-gray-700 text-justify font-mono font-thin text-xs">Computer Science, Data Structures, Algorithms, Software Engineering, Machine Learning, Deep Learning, </p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                            <p className="text-sm text-green-600 font-semibold mb-2">Achievements</p>
                            <p className="text-gray-700 text-justify font-mono font-thin text-xs">Secured heighst marks on C and Java programming lab, with 94% marks</p>
                        </div>
                    </div>

                    <p className="text-gray-700 text-justify font-mono font-thin text-xs ">
                        During my undergraduate studies, I have gained a solid grasp of the fundamental concepts underlying all branches of computer science.
                        I have also developed a strong foundation in mathematics, including calculus, linear algebra, and discrete mathematics.
                        I have also gained practical experience in software development, including web development, mobile app development, and game development.
                    </p>

                    <ul className="list-disc pl-6 space-y-2 marker:text-blue-400 text-sm">
                        <li>Developed first programming projects in BASIC</li>
                        <li>Get heighst bonus marks in distributed database project by implementing KNN.</li>
                        <li>Maintained perfect GPA in programming labs and projects</li>
                    </ul>
                </>
            )
        },
        // Add other education entries here
        {
            title: "St. Joseph Higher Secondary School",
            subtitle: "Higher Secondary Certificate (HSC) in Science",
            cgpa: "5.00/5.00",
            content: (
                <>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <p className="text-sm text-blue-600 font-semibold mb-2">Key Subjects</p>
                            <p className="text-gray-700 text-justify font-mono font-thin text-xs">Mathematics, Physics, Chemistry, Biology, ICT</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                            <p className="text-sm text-green-600 font-semibold mb-2">Achievements</p>
                            <p className="text-gray-700 text-justify font-mono font-thin text-xs">Get Golden A+ and secure 91% marks on average</p>
                        </div>
                    </div>

                    <p className="text-gray-700 text-justify font-mono font-thin text-xs">
                        Earned my HSC in Science with distinction, developing foundational skills in STEM subjects
                        that paved the way for my computer science journey.
                    </p>

                    <ul className="list-disc pl-6 space-y-2 marker:text-blue-400 text-sm">
                        <li>Developed basic of programming</li>
                        <li>Awarded Best Science Project for sustainable city management</li>
                        <li>Maintained perfect GPA in mathematics and physics</li>
                    </ul>
                </>
            )
        },
        {
            title: "Rowmari C.G. Zaman High School",
            subtitle: "Secondary School Certificate (SSC) in Science",
            cgpa: "5.00/5.00",
            content: (
                <>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <p className="text-sm text-blue-600 font-semibold mb-2">Key Subjects</p>
                            <p className="text-gray-700 text-justify font-mono font-thin text-xs">Mathematics, Physics, Chemistry, Biology</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                            <p className="text-sm text-green-600 font-semibold mb-2">Achievements</p>
                            <p className="text-gray-700 text-justify font-mono font-thin text-xs">Get Govt. scholarship by securing 96% marks.</p>
                        </div>
                    </div>

                    <p className="text-gray-700 text-justify font-mono font-thin text-xs">
                        Earned my SSC in Science with distinction, developing foundational skills in STEM subjects
                        that paved the way for my computer science journey.
                    </p>

                    <ul className="list-disc pl-6 space-y-2 marker:text-blue-400 text-sm">
                        <li>Devlop interest for science and technology</li>
                        <li>Mastered the creative question pattern</li>
                        <li>Got Govt. scholarship</li>
                    </ul>
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
        <div
            className="relative py-12 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="max-w-7xl mx-auto px-4">
                {/* Slider Container */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${activeIndex * 100}%)`,
                        transition: transitionEnabled
                            ? 'transform 500ms ease-in-out'
                            : 'none'
                    }}
                >
                    {extendedEducation.map((item, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 px-4 flex justify-center"
                        >
                            <InformationCard
                                title={item.title}
                                subtitleInfo={item.subtitle}
                                cgpa={item.cgpa}
                            >
                                {item.content}
                            </InformationCard>
                        </div>
                    ))}
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-8">
                    <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100">
                        {educationData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`relative p-1.5 transition-all duration-300 ${index === activeIndex ? "w-8" : "w-4 hover:w-6"
                                    }`}
                            >
                                <div
                                    className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? "bg-gradient-to-r from-blue-500 to-cyan-400 w-full shadow-xs"
                                        : "bg-gray-300 w-full hover:bg-blue-300"
                                        }`}
                                >
                                    {index === activeIndex && (
                                        <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse" />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
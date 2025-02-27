import React from 'react';
import InformationCard from '../InformationCard';
import Link from 'next/link';

const ProfessionalSkill = () => {
    return (
        <div id='resume' className='pt-[20px]'>
            <div className="education grid grid-cols-2 gap-4">

                {/* React.js */}
                <InformationCard title="React.js" subtitleInfo="Live Media Ltd">
                    <p className="text-justify">
                        I started learning React.js during my early career as a developer. My first project using React.js was  
                         <Link
                            className="text-amber-300 hover:text-amber-500"
                            href="https://lekharpoka.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Lekharpoka
                        </Link>, 
                        a dynamic blogging platform. This project allowed me to understand the power of component-based architecture and hooks.
                    </p>
                    <p className="text-justify">
                        Since then, I’ve gained expertise in state management using Redux, Next.js, and server-side rendering to build performant and scalable web applications.
                    </p>
                </InformationCard>

                {/* Node.js */}
                <InformationCard title="Node.js" subtitleInfo="Backend Development">
                    <p className="text-justify">
                        I started using Node.js for building RESTful APIs and microservices. My experience includes working with Express.js, 
                        Elysia.js, and Sequelize for database integration.
                    </p>
                    <p className="text-justify">
                        I have built scalable APIs and real-time applications, such as chat systems and booking platforms, leveraging Node.js non-blocking I/O model.
                    </p>
                </InformationCard>

                {/* Deno.js */}
                <InformationCard title="Deno.js" subtitleInfo="Modern Backend Frameworks">
                    <p className="text-justify">
                        I explored Deno.js for its modern approach to secure and scalable backend development. It’s been a great tool for creating 
                        lightweight APIs with its native TypeScript support and built-in package manager.
                    </p>
                    <p className="text-justify">
                        Projects like **AnyBooking** have allowed me to leverage Deno.js for its simplicity and performance in handling real-time 
                        communications using WebSockets.
                    </p>
                </InformationCard>

                {/* Bun.js */}
                <InformationCard title="Bun.js" subtitleInfo="Next-Generation Runtime">
                    <p className="text-justify">
                        Bun.js has been an exciting addition to my toolkit, offering an ultra-fast runtime for JavaScript and TypeScript. I’ve used 
                        it to build highly optimized applications and APIs where performance is critical.
                    </p>
                    <p className="text-justify">
                        My recent projects include experimenting with Bun.js for server-side rendering in React applications and benchmarking 
                        its speed against other runtimes like Node.js and Deno.js.
                    </p>
                </InformationCard>

                {/* Redux.js */}
                <InformationCard title="Redux.js" subtitleInfo="State Management">
                    <p className="text-justify">
                        Redux.js has been my go-to library for state management in large-scale React applications. I’ve worked extensively with 
                        Redux Toolkit to simplify the development process and integrate middleware like Thunk for asynchronous logic.
                    </p>
                    <p className="text-justify">
                        My experience includes managing complex application states for dynamic UIs and enhancing user experience by maintaining 
                        data consistency across components.
                    </p>
                </InformationCard>

                {/* MySQL */}
                <InformationCard title="MySQL" subtitleInfo="Database Management">
                    <p className="text-justify">
                        MySQL has been a core part of my backend development journey. I have used it for designing relational databases, writing 
                        optimized queries, and managing data consistency.
                    </p>
                    <p className="text-justify">
                        Ive worked on projects like **AnyBooking**, where I implemented normalized database schemas and leveraged MySQL for 
                        transactional operations. Additionally, I have integrated MySQL with ORMs like Sequelize and Prisma.
                    </p>
                </InformationCard>

            </div>
        </div>
  );
};

export default ProfessionalSkill;

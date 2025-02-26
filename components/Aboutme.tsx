import React from 'react';
import HighlightWords from './HighlightWords';

export default function AboutMe() {
    return (
        <div className="font-mono text-justify">
            <h1 className="font-exo_2 text-3xl w-full justify-center text-center font-semibold">ABOUT ME</h1>
            <p className='pt-[10px] px-[10px] text-[16px] md:text-[20px] md:px-[50px] leading-10'>
                <HighlightWords
                    highlightWords={['Fuad Hasan', 'Brahmaputra', 'Kurigram', 'Bachelor&apos;s', 'Computer Science and Engineering', 'nature', 'plants']}
                    highlightClassName="text-yellow-500"
                >
                    Hi, I&apos;m <strong>Fuad Hasan</strong>, a passionate <strong>Software Developer</strong> with a strong focus on building scalable and efficient web applications. With expertise in <strong>Next.js, React, Node.js, Redux, Bun, and Elysia.js</strong>, I specialize in creating high-performance frontend and backend solutions.<br/><br/>

                    Currently, I work as a <strong>Associate Software Engineer at Live Media Ltd</strong>, where I develop and optimize web applications, ensuring seamless user experiences. I thrive in fast-paced environments, always eager to learn new technologies and solve complex challenges.<br/><br/>
                    Beyond coding, I&apos;m an <em>introvert, a plant lover, and a romantic at heart</em>—always finding inspiration in the smallest details of life.<br/><br/>

                    Let&apos;s build something amazing together! 🚀<br/>

                </HighlightWords>
            </p>
        </div>
    );
}

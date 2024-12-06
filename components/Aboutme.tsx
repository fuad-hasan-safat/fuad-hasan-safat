import React from 'react';
import HighlightWords from './HighlightWords';

export default function AboutMe() {
    return (
        <div className="font-playwrite text-justify">
            <h1 className="font-exo_2 text-3xl w-full justify-center text-center font-semibold">ABOUT ME</h1>
            <p className='pt-[10px] px-[10px] text-[16px] md:text-[20px] md:px-[50px] leading-10'>
                <HighlightWords
                    highlightWords={['Fuad Hasan', 'Brahmaputra', 'Kurigram', 'Bachelor&apos;s', 'Computer Science and Engineering', 'nature', 'plants']}
                    highlightClassName="text-yellow-200"
                >
                    I&apos;m Fuad Hasan, a software developer who has journeyed from Rowmari, Kurigram — a serene town by the
                    Brahmaputra River often ravaged by deadly floods—to the bustling capital of Bangladesh, Dhaka. Growing up in
                    such a resilient community instilled in me the values of perseverance, adaptability, and determination. Today, I
                    channel these traits into my work as a developer, crafting innovative solutions and overcoming challenges with
                    creativity and grit.<br /><br />
                    With a Bachelor&apos;s degree in Computer Science and Engineering, I specialize in modern web technologies,
                    backend development, and database design. I have extensive experience in frontend frameworks like React,
                    Next.js, and Redux, paired with backend expertise in Node.js, Elysia.js, and Bun.js. My proficiency extends to
                    database design and management, utilizing tools like MySQL, Prisma, and Sequelize to build scalable and
                    efficient systems.<br /><br />
                    My journey from the riverside town of Rowmari to becoming a developer in Dhaka reflects my unwavering commitment
                    to growth and learning. Beyond the technical world, I&apos;m an introvert with a love for nature, finding peace
                    and inspiration in the simplicity of plants. Let&apos;s build something amazing together!

                </HighlightWords>
            </p>
        </div>
    );
}

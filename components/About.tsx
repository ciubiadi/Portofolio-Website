'use client';

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                Before graduating with a degree in{" "}
                <span className="font-medium">Informatics in Economics</span>, I decided 
                to pursue my passion for programming. Besides the knowledge gained in software development as 
                a student, I started learning <span className="font-medium">full-stack web development</span>{" "}
                since the 2nd year of Faculty. <span className="italic">My favorite part of programming</span>{" "}
                is the problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem.{" "}
            </p>
            <p className="mb-3">My first stack was{" "}
                <span className="font-medium">
                    jQuery, PHP, Magento and MySQL / PostgreSQL and VueJS later on,
                </span> <span className="underline">but</span> my <strong>core</strong> stack is{" "}
                <span className="font-medium">
                    React, Next.js and MongoDB
                </span>
                . I am also familiar with TypeScript and Angular but also with Tailwind and Bootstrap. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.{" "}
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing
                the guitar or the piano, doing sports, and reading. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning about{" "}
                <span className="font-medium">nutrition and neuroscience</span>.
            </p>
        </motion.section>
    )
}

export default About
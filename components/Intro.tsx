"use client";

import meImage from '@/public/me.jpeg'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";


const Intro = () => {
  return (
    <section id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className='flex items-center justify-center'>
            {/* The span with emoji will be positioned "absolutely" to the bottom 
            right of this div, so this div will have position: relative */}
            <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0}}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: 'tween',
                        duration: 0.3,
                    }}
                >
                    <Image src={meImage} alt="Adrian Portrait" width="192"
                        height="192" quality="95" priority={true}
                        className='h-24 w-24 rounded-full border-[0.35rem] 
                        object-cover border-white shadow-xl' 
                    />
                </motion.div>                
                <motion.span 
                    className='text-4xl absolute bottom-[-4px] right-[-4px]'
                    initial={{ opacity: 0, scale: 0}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{
                        type: 'spring',
                        stiffness: 125,
                        delay: 0.2,
                        duration: 0.7
                    }}
                >
                    👋
                </motion.span>
            </div>
        </div>
        
        {/* I use the space between curly brackets{" "} because in this way the text will
        not be on the same line, so I'm saying explicitly that I want a space between. */}
        <motion.h1 className='mb-10 mt-4 px-4 text-2xl 
            font-medium !leading-[1.5] sm:text-4xl'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0}}
        >
            <span className="font-bold">Hello, I'm Adrian.</span> I'm a{" "}
            <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">3 years</span> of experience. I enjoy
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>.
        </motion.h1>

        <motion.div
            className="flex flex-col sm:flex-row items-center justify-center 
            gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.1,
            }}
        >
            <Link
                href="#contact"
                className="group bg-gray-900 text-white px-7 py-3 flex 
                items-center gap-2 rounded-full outline-none focus:scale-110 
                hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                onClick={() => {
                    console.log('Go to contact')
                }}
            >
                Contact me here{" "}
                <BsArrowRight 
                    className="opacity-70 group-hover:translate-x-1 transition" 
                />
            </Link>

            <a
                className="group bg-white px-7 py-3 flex items-center gap-2 
                rounded-full outline-none focus:scale-110 hover:scale-110 
                active:scale-105 transition cursor-pointer borderBlack 
                dark:bg-white/10"
                href="/CV.pdf"
                download
            >
                Download CV{" "}
                <HiDownload
                className="opacity-60 group-hover:translate-y-1 transition" 
                />
            </a>

            <a
                className="bg-white p-4 text-gray-700 hover:text-gray-950 
                flex items-center gap-2 rounded-full focus:scale-[1.15] 
                hover:scale-[1.15] active:scale-105 transition cursor-pointer 
                borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://www.linkedin.com/in/adrian-albert-ciubucciu/"
                target="_blank"
            >
                <BsLinkedin />
            </a>

            <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 
                text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] 
                hover:text-gray-950 active:scale-105 transition cursor-pointer 
                borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/ciubiadi"
                target="_blank"
            >
                <FaGithubSquare />
            </a>
        </motion.div>
    </section>
  )
}

export default Intro
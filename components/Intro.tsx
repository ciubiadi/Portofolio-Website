"use client";
import Image from 'next/image'
import React from 'react'
import meImage from '@/public/me.jpeg'
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
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
                        height="192" priority={true}
                        className='h-24 w-24 rounded-full border-[0.35rem] 
                        object-cover border-white shadow-xl' 
                    />
                </motion.div>                
                <motion.span 
                    className='text-4xl absolute bottom-0 right-0'
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
        <motion.p className='mb-10 mt-4 px-4 text-2xl 
            font-medium !leading-[1.5] sm:text-4xl'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0}}
        >
            <span className="font-bold">Hello, I'm Adrian.</span> I'm a{" "}
            <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">3 years</span> of experience. I enjoy
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>.
        </motion.p>
    </section>
  )
}

export default Intro
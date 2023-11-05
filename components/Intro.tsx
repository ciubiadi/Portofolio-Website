"use client";
import Image from 'next/image'
import React from 'react'
import meImage from '@/public/me.jpeg'
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section>
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
    </section>
  )
}

export default Intro
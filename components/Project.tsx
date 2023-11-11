'use client';

import { projectsData } from '@/lib/data';
import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useAnimation } from "framer-motion";
import { FaGithub, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';

type ProjectProps = (typeof projectsData)[number];

const Project = ( {title, description, tags, imageUrl, repo, liveUrl} : ProjectProps ) => {
    /*
        useScroll hook needs the target element ( the html reference ) 
        and the offest property which it means when I want to start to animate it. 
        The target will be the individual project. Also the container is the viewport, so I need to specify at 
        what point I want to start the animation. I want to start it as soon as the 
        end of the container reaches the top of the target. 
        "0" means the bottom of the viewport corss the top of the target(project) 
        which is "1". The "1.33" says that the animation should end when the bottom of the  viewport has gone 
        33% beyond the end of the project.
    */
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

      // Animation controls for the overlay
  const overlayAnimationControls = useAnimation();

    const [showOverlay, setShowOverlay] = useState(false);

    const handleProjectClick = () => {
      setShowOverlay(!showOverlay);
      overlayAnimationControls.start(showOverlay ? 'hidden' : 'visible');
    };

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section onClick={handleProjectClick} className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                        {description}
                    </p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

            <Image
                src={imageUrl}
                alt="Project I worked on"
                quality={95}
                className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                transition 
                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2

                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2

                group-even:right-[initial] group-even:-left-40"
            />

        <AnimatePresence>
          {showOverlay && (
            <motion.div
              className={`overlay ${showOverlay ? 'active' : ''}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.8 },
              }}
            >
              <div className="overlay-background" />

              <div className="overlay-content">
                  {/* White buttons */}
                  <div className="flex flex-wrap mt-4 gap-2 overlay-buttons">
                        {/* <Link href={repo} target="_blank" className="white-button" >
                            <FaGithub className='overlay-icon' />
                        </Link>
                        <Link href={liveUrl} target="_blank" className="white-button" > 
                            <FaGlobe className='overlay-icon' />
                        </Link> */}
                        <Link
                            href={repo}
                            className="dark:text-gray-300 dark:hover:text-gray-900 dark:hover:bg-gray-150 
                            dark:hover:bg-opacity-100
                            hover:bg-gray-850 hover:bg-opacity-100 hover:text-gray-950
                            text-gray-850 bg-gray-300 dark:bg-gray-300 bg-opacity-80 dark:bg-opacity-30 px-3 py-1 
                            text-[0.7rem] uppercase tracking-wider rounded-full group  flex items-center 
                             justify-center gap-2 h-[3rem] w-[8rem] outline-none transition-all 
                             focus:scale-110 hover:scale-110  active:scale-105"
                        >
                            See Code{" "}
                            <FaGithub className="text-xl opacity-70 transition-all group-hover:scale-[1.2]" />{" "}
                        </Link>
                        <Link
                            className="dark:text-gray-300 dark:hover:text-gray-900 dark:hover:bg-gray-150 
                            dark:hover:bg-opacity-100
                            hover:bg-gray-850 hover:bg-opacity-100 hover:text-gray-950
                            text-gray-850 bg-gray-300 dark:bg-gray-300 bg-opacity-80 dark:bg-opacity-30 px-3 py-1 
                            text-[0.7rem] uppercase tracking-wider rounded-full group  flex items-center 
                             justify-center gap-2 h-[3rem] w-[8rem] outline-none transition-all 
                             focus:scale-110 hover:scale-110  active:scale-105"
                            href={liveUrl}
                        >
                            Demo Live{" "}
                            <FaGlobe className="text-xl opacity-70 transition-all group-hover:scale-[1.2]" />{" "}
                        </Link>
                    </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>


            </section>
        </motion.div>
    )
}

export default Project
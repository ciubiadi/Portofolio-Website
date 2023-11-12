'use client';

import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from './Project'
import { useSectionInView } from '@/lib/hooks';

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null | boolean | undefined>(null);
  const handleProjectClick = (index: number) => {
    setSelectedProjectIndex(index === selectedProjectIndex ? undefined : index);
  };
  
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
        <SectionHeading>My projects</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project}
                     isSelected={index === selectedProjectIndex} 
                     onProjectClick={() => handleProjectClick(index)} />
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}

export default Projects;




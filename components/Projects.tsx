import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from './Project'

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
        <SectionHeading>My projects</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}

export default Projects




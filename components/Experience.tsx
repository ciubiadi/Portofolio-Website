"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((item, index) => {
            console.log(item);
            return (
                <div key={index}>
                    <VerticalTimelineElement>
                    <h3 >{item.title}</h3>
                    <p >{item.location}</p>
                    <p >
                        {item.description}
                    </p>
                    </VerticalTimelineElement>
                </div>
            )
        })}
      </VerticalTimeline>
    </section>
  );
}

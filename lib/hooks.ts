import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    // when X% is in the view,
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // use useEffect because I'm trying to synchronize the state with an "external system". 
  // Is not recommended settings state during rendering so that's why I will use useEffect
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
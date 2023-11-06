'use client';

import React, { useState, createContext, useContext } from 'react'
import { links } from '@/lib/data'

type SectionName = (typeof links)[number]["name"];

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
}

// it can be null when it is outside the Provider
export const ActiveSectionContext = React.createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({children}: ActiveSectionContextProviderProps) => {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");

    return (
        <ActiveSectionContext.Provider value={{
            activeSection,
            setActiveSection
        }}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

export default ActiveSectionContextProvider

// custom hook to handler the type of ActiveSectionContext
export const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext);

    if(context === null) {
        throw new Error(
            'useActiveSectionContext must be used within an ActiveSectionContextProvider'
        );
    }
    return context;
}
import React, { createContext, useContext } from 'react';

const AnimationContext = createContext({
    isVisible: false,
    sectionName: '',
});

export const AnimationProvider = ({ children, sectionName, isVisible }) => {
    return (
        <AnimationContext.Provider value={{ isVisible, sectionName }}>
            {children}
        </AnimationContext.Provider>
    );
};

export const useAnimation = () => {
    const context = useContext(AnimationContext);
    if (context === undefined) {
        throw new Error('useAnimation doit  tre utilis  dans un AnimationProvider');
    }
    return context;
};


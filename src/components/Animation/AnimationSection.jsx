import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { AnimationProvider } from './AnimationContext';

export const AnimationSection = ({ children, sectionName }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3, once: true });

    return (
        <div ref={ref}>
            <AnimationProvider sectionName={sectionName} isVisible={isInView}>
                {children}
            </AnimationProvider>
        </div>
    );
};

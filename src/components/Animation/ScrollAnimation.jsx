import { motion } from 'framer-motion';
import { useAnimation } from './AnimationContext';

const MotionDiv = motion.div;

const ScrollAnimation = ({ children, delay = 0, noScroll = false }) => {
    const { isVisible } = useAnimation();

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            animate={noScroll || isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: delay }}
        >
            {children}
        </MotionDiv>
    );
};

export default ScrollAnimation;

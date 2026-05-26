import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({ onComplete }) => {
    const [step, setStep] = useState(1);
    const brandName = "AUTOZENIN";
    const tagline = "Are you running the business, or is the business running you?";

    useEffect(() => {
        // Step 1: Pause 0.5s, then show letters
        const timer1 = setTimeout(() => setStep(2), 500);
        // Step 2-3: Tagline sequence
        const timer2 = setTimeout(() => setStep(3), 2000);
        // Step 4: Final reveal
        const timer3 = setTimeout(() => {
            setStep(4);
            setTimeout(onComplete, 1000);
        }, 4000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [onComplete]);

    const letterVariants = {
        hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)", color: "#00B4D8" },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            color: "#FFFFFF",
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: "easeOut",
            },
        }),
    };

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ y: "-100%", transition: { duration: 1, ease: [0.7, 0, 0.3, 1] } }}
        >
            <div className="relative text-center">
                {/* Brand Name */}
                <div className="flex justify-center space-x-1 sm:space-x-4 mb-4">
                    {brandName.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={letterVariants}
                            initial="hidden"
                            animate={step >= 2 ? "visible" : "hidden"}
                            className="text-4xl sm:text-7xl md:text-8xl font-heading font-bold tracking-tighter"
                            style={{ textShadow: "0 0 20px rgba(0, 180, 216, 0.5)" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                {/* Tagline */}
                <AnimatePresence>
                    {step >= 3 && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-secondary text-sm sm:text-xl md:text-2xl font-body max-w-2xl px-4"
                        >
                            {tagline}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>

            {/* Skip Button */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
                onClick={onComplete}
                className="absolute top-8 right-8 text-text/50 font-body text-sm hover:text-primary transition-colors cursor-pointer"
            >
                Skip Intro
            </motion.button>

            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
                />
            </div>
        </motion.div>
    );
};

export default IntroAnimation;

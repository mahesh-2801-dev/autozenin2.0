import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-background overflow-hidden">
            {/* Animated Grid */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(#1C2E40 1px, transparent 1px), linear-gradient(90deg, #1C2E40 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            >
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        y: [0, 40],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        backgroundImage: `linear-gradient(#00B4D8 1px, transparent 1px)`,
                        backgroundSize: '100% 40px',
                        opacity: 0.1,
                    }}
                />
            </div>

            {/* Gradient Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]"
            />

            {/* Floating Particles (CSS only for performance) */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-primary/20"
                        style={{
                            width: Math.random() * 4 + 2 + 'px',
                            height: Math.random() * 4 + 2 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            {/* Dark vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-background/80" />
        </div>
    );
};

export default Background;

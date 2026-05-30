import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="flex flex-col items-center mb-8">
                        <motion.img
                            initial={{ scale: 0, rotate: -20 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
                            src={logo}
                            alt="Logo"
                            className="w-20 h-20 rounded-3xl border-2 border-primary/20 shadow-[0_0_40px_rgba(0,180,216,0.2)] mb-6 object-cover"
                        />
                        <motion.div
                            className="inline-block px-4 py-1.5 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm"
                            whileHover={{ scale: 1.05, border: "1px solid rgba(0, 180, 216, 0.6)" }}
                        >
                            <span className="text-xs font-body font-bold tracking-widest text-primary uppercase">
                                Next-Gen AI Automation
                            </span>
                        </motion.div>
                    </div>

                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-[1.1] tracking-tighter">
                        Are you running the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                            business
                        </span>
                        , or is the <br />
                        business running you?
                    </h1>

                    <p className="text-lg sm:text-xl text-text/60 font-body max-w-3xl mx-auto mb-12 leading-relaxed">
                        Most businesses lose <span className="text-primary font-bold">40% of their leads</span> after office hours —
                        because no one picks up. Autozenin fixes that with intelligent AI agents that never sleep.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.a
                            href="https://cold-call-multi-languages.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 180, 216, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-primary text-background font-bold rounded-xl flex items-center space-x-2 overflow-hidden cursor-pointer"
                        >
                            <span className="relative z-10">Try the Voice Agent</span>
                            <Play size={18} className="relative z-10 fill-current" />
                            <motion.div
                                className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                            />
                        </motion.a>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 180, 216, 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-primary/50 text-primary font-bold rounded-xl flex items-center space-x-2 transition-colors"
                        >
                            <span>Talk to Us</span>
                            <ChevronRight size={18} />
                        </motion.button>
                    </div>
                </motion.div>

                {/* Floating AI Visuals (Placeholder/Abstract) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
                    <motion.div
                        animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/10 rounded-full blur-[2px]"
                    />
                    <motion.div
                        animate={{
                            rotate: -360,
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-secondary/10 rounded-full blur-[1px]"
                    />
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-text/30 font-body">Scroll To Explore</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
                />
            </motion.div>
        </section>
    );
};

export default Hero;

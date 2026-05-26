import React from 'react';
import { motion } from 'framer-motion';

const ResultsStrip = () => {
    const stats = [
        { label: "Availability", value: "24/7" },
        { label: "Response Time", value: "<10 sec" },
        { label: "Support", value: "Multi-language" },
        { label: "Missed Leads Reduced", value: "70-80%" },
    ];

    return (
        <div className="py-12 border-y border-border/30 bg-card/20 backdrop-blur-sm relative overflow-hidden">
            {/* Moving Light Sweep */}
            <motion.div
                animate={{ x: ['100%', '-100%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12"
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="text-2xl md:text-4xl font-heading font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </div>
                            <div className="text-[10px] md:text-xs uppercase tracking-widest text-text/40 font-body">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResultsStrip;

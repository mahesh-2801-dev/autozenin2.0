import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Testimonials = () => {
    return (
        <div className="pt-32 pb-24 container mx-auto px-6 h-[80vh] flex items-center justify-center">
            <SEO title="Testimonials" />
            <div className="text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative inline-block"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10" />

                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 opacity-40">
                        Real Results. <br /> Real Stories.
                    </h1>
                    <p className="text-xl text-text/60 max-w-xl mx-auto mb-12">
                        We are currently onboarding our first clients. <br />
                        This page will be updated with real results very soon.
                    </p>

                    <div className="h-px w-32 bg-primary/30 mx-auto" />
                </motion.div>
            </div>
        </div>
    );
};

export default Testimonials;

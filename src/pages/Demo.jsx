import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const Demo = () => {
    return (
        <div className="pt-32 pb-24 container mx-auto px-6">
            <SEO title="Demo" description="Experience Autozenin's AI voice agents in action and see how lead automation works." />
            <div className="text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-heading font-bold mb-6"
                >
                    Don’t take our word for it. <br />
                    <span className="text-primary">Try it yourself.</span>
                </motion.h1>
                <p className="text-lg text-text/60 max-w-xl mx-auto">
                    Experience the power of Autozenin's AI voice agents in action.
                    See how we transform missed calls into revenue.
                </p>
            </div>

            <div className="max-w-5xl mx-auto mb-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="aspect-video glass rounded-3xl border-primary/20 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer"
                >
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center z-10 shadow-[0_0_40px_rgba(0,180,216,0.5)] group-hover:scale-110 transition-transform">
                        <Play className="text-background fill-current ml-1" size={32} />
                    </div>
                    <p className="mt-6 text-primary font-bold text-lg z-10">Watch Demo Video</p>
                </motion.div>
            </div>

            <div className="text-center mb-32">
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0, 180, 216, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-6 bg-primary text-background font-bold text-2xl rounded-2xl shadow-[0_0_30px_rgba(0,180,216,0.3)]"
                >
                    Try the Voice Agent Now
                </motion.button>
            </div>

            <div className="mb-24">
                <h2 className="text-center text-3xl font-heading font-bold mb-16">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

                    <div className="relative z-10 glass p-8 rounded-2xl text-center">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary font-bold text-xl">1</div>
                        <h3 className="text-xl font-heading font-bold mb-4">Client Calls</h3>
                        <p className="text-text/60 font-body">An interested lead calls your business after office hours.</p>
                    </div>
                    <div className="relative z-10 glass p-8 rounded-2xl text-center scale-110 border-primary/50 shadow-2xl">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-background font-bold text-xl">2</div>
                        <h3 className="text-xl font-heading font-bold mb-4 text-primary">Agent Handles It</h3>
                        <p className="text-text/60 font-body">Our AI agent answers, qualifies the lead, and books an appointment.</p>
                    </div>
                    <div className="relative z-10 glass p-8 rounded-2xl text-center">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary font-bold text-xl">3</div>
                        <h3 className="text-xl font-heading font-bold mb-4">You Get the Lead</h3>
                        <p className="text-text/60 font-body">The lead details are instantly pushed to your CRM or phone.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Demo;

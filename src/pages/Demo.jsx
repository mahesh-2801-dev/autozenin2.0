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

            <div className="max-w-4xl mx-auto mb-24 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass rounded-3xl border-primary/20 relative overflow-hidden group shadow-[0_0_50px_rgba(0,180,216,0.1)] inline-block"
                >
                    <video
                        src="/demovideo.mp4"
                        controls
                        autoPlay
                        muted
                        loop
                        className="w-full h-auto max-h-[70vh] object-contain"
                    />
                </motion.div>
            </div>

            <div className="text-center mb-32">
                <motion.a
                    href="https://business-voice-call-agent-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0, 180, 216, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-12 py-6 bg-primary text-background font-bold text-2xl rounded-2xl shadow-[0_0_30px_rgba(0,180,216,0.3)] cursor-pointer"
                >
                    Try the Voice Agent Now
                </motion.a>
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

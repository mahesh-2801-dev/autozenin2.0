import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
    return (
        <div className="pt-32 pb-24 container mx-auto px-6">
            <SEO title="Contact" description="Get in touch with Autozenin for premium AI automation solutions. No pitch decks, no pressure." />
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8">
                        Let’s talk. <br />
                        <span className="text-primary italic">No pressure.</span>
                    </h1>
                    <p className="text-xl text-text/60 font-body mb-12 max-w-md">
                        Ready to automate your business? Tell us about your goals and let's see if we're a good fit.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center space-x-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-text/40 uppercase tracking-widest font-body">Call Us</p>
                                <p className="text-lg font-bold">+91 91544 54756</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6">
                            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-text/40 uppercase tracking-widest font-body">Email Us</p>
                                <p className="text-lg font-bold">hello@autozenin.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6">
                            <div className="w-12 h-12 bg-border/20 rounded-xl flex items-center justify-center text-text/60">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-text/40 uppercase tracking-widest font-body">Location</p>
                                <p className="text-lg font-bold">Vijayawada, Andhra Pradesh</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass p-8 md:p-12 rounded-3xl border-primary/20 relative"
                >
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-text/60 ml-1">Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-background/50 border border-border/50 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-text/60 ml-1">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="+91 00000 00000"
                                className="w-full bg-background/50 border border-border/50 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-text/60 ml-1">Business Type</label>
                            <select className="w-full bg-background/50 border border-border/50 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-colors appearance-none">
                                <option className="bg-card">Real Estate</option>
                                <option className="bg-card">Education</option>
                                <option className="bg-card">Healthcare</option>
                                <option className="bg-card">E-commerce</option>
                                <option className="bg-card">Other</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-text/60 ml-1">Message</label>
                            <textarea
                                placeholder="How can we help?"
                                className="w-full bg-background/50 border border-border/50 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-colors min-h-[120px]"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-primary text-background font-bold rounded-xl flex items-center justify-center space-x-2 shadow-[0_10px_30px_rgba(0,180,216,0.3)] hover:shadow-[0_15px_40px_rgba(0,180,216,0.4)] transition-all"
                        >
                            <span>Send Message</span>
                            <Send size={18} />
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;

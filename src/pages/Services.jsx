import React from 'react';
import { motion } from 'framer-motion';
import { Bot, PhoneCall, Mail, Search, Globe, Layout, Calendar, Database } from 'lucide-react';
import SEO from '../components/SEO';

const ServiceSection = ({ icon: Icon, title, items, side = 'left' }) => (
    <motion.div
        initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-20 grid md:grid-cols-2 gap-12 items-center"
    >
        <div className={side === 'right' ? 'md:order-2' : ''}>
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="text-primary" size={32} />
            </div>
            <h2 className="text-4xl font-heading font-bold mb-6">{title}</h2>
            <div className="space-y-4">
                {items.map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 text-text/70">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="font-body text-lg">{item}</span>
                    </div>
                ))}
            </div>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 px-8 py-3 border border-primary/50 text-primary font-bold rounded-xl hover:bg-primary/5 transition-all"
            >
                Talk To Us About This →
            </motion.button>
        </div>
        <div className={`aspect-video rounded-3xl glass border-primary/10 overflow-hidden relative ${side === 'right' ? 'md:order-1' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
                <Icon className="text-primary/20" size={120} />
            </div>
        </div>
    </motion.div>
);

const Services = () => {
    return (
        <div className="pt-32 pb-24 container mx-auto px-6">
            <SEO title="Services" description="Explore our premium AI automation services: AI Agents, Custom Software, and Digital Marketing." />
            <div className="text-center mb-24">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-7xl font-heading font-bold mb-6"
                >
                    High-Octane <br /><span className="text-primary">Automation</span>
                </motion.h1>
                <p className="text-xl text-text/60 max-w-2xl mx-auto">
                    We build the engine. You drive the growth.
                </p>
            </div>

            <ServiceSection
                icon={Bot}
                title="AI Agents & Automation"
                items={[
                    "Voice agents for inbound/outbound calls",
                    "Intelligent chat agents for 24/7 support",
                    "Automated call evaluation systems",
                    "CRM multi-agent workflows"
                ]}
            />

            <ServiceSection
                icon={Globe}
                title="Custom Software"
                items={[
                    "High-performance business websites",
                    "Operational dashboards & portals",
                    "Custom CRM system integration",
                    "Automated booking systems"
                ]}
                side="right"
            />

            <ServiceSection
                icon={Search}
                title="Digital Marketing"
                items={[
                    "Data-driven SEO strategies",
                    "Paid ad funnel optimization",
                    "Automated social media management",
                    "Lead magnet system design"
                ]}
            />
        </div>
    );
};

export default Services;

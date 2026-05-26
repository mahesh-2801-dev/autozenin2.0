import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Code, BarChart3, ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative p-8 rounded-2xl glass border-border/50 hover:border-primary/50 transition-all duration-500"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

            <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                    <Icon className="text-primary" size={28} />
                </div>

                <h3 className="text-2xl font-heading font-bold mb-4 text-text group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="text-text/60 font-body mb-8 leading-relaxed">
                    {description}
                </p>

                <a
                    href="#services"
                    className="flex items-center space-x-2 text-sm font-bold text-secondary hover:text-primary transition-colors"
                >
                    <span>Learn More</span>
                    <ArrowUpRight size={16} />
                </a>
            </div>

            {/* Light Sweep Animation */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <motion.div
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
                    className="absolute inset-y-0 w-32 bg-white/5 skew-x-12 -translate-x-full"
                />
            </div>
        </motion.div>
    );
};

const ServicesPreview = () => {
    const services = [
        {
            icon: Bot,
            title: "AI Agents & Automation",
            description: "Custom-built AI voice and chat agents that handle sales, support, and technical queries 24/7 with human-level intelligence."
        },
        {
            icon: Code,
            title: "Custom Software",
            description: "High-performance websites, dashboards, and CRM systems designed to sit at the core of your automated business infrastructure."
        },
        {
            icon: BarChart3,
            title: "Digital Marketing",
            description: "Data-driven SEO and paid acquisition strategies that feed your AI funnel with high-intent leads day and night."
        }
    ];

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-6xl font-heading font-bold mb-6"
                    >
                        Smarter Systems. <br />
                        <span className="text-primary">Faster Growth.</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        className="h-1 bg-primary mx-auto rounded-full"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <ServiceCard
                            key={i}
                            {...service}
                            delay={i * 0.2}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;

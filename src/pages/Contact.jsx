import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';

const contactMethods = [
    {
        icon: MessageCircle,
        title: 'WhatsApp',
        value: '+91 9346863340',
        link: 'https://wa.me/919346863340',
        color: 'bg-emerald-500/10 text-emerald-400',
        accent: 'bg-emerald-500',
        desc: 'Instant chat for quick inquiries and project updates.',
    },
    {
        icon: Mail,
        title: 'Email',
        value: 'contact@autozenin.com',
        link: 'https://mail.google.com/mail/?view=cm&fs=1&to=contact@autozenin.com',
        color: 'bg-primary/10 text-primary',
        accent: 'bg-primary',
        desc: 'Send us detailed project requirements and get a quote.',
    },
];

const Contact = () => {
    return (
        <div className="pt-28 pb-12 container mx-auto px-6">
            <SEO title="Contact" description="Get in touch with Autozenin for premium AI automation solutions. No pitch decks, no pressure." />
            <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: heading + contact details */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8">
                        Let's talk. <br />
                        <span className="text-primary italic">No pressure.</span>
                    </h1>
                    <p className="text-xl text-text/60 font-body mb-12 max-w-md">
                        Ready to automate your business? Tell us about your goals and let's see if we're a good fit.
                    </p>

                    <div className="space-y-8">
                        {/* Phone */}
                        <a href="tel:+919346863340" className="flex items-center space-x-6 group cursor-pointer">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-text/40 uppercase tracking-widest font-body">Call Us</p>
                                <p className="text-lg font-bold group-hover:text-primary transition-colors">+91 9346863340</p>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@autozenin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-6 group cursor-pointer"
                        >
                            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary/20 transition-colors">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-text/40 uppercase tracking-widest font-body">Email Us</p>
                                <p className="text-lg font-bold group-hover:text-secondary transition-colors">contact@autozenin.com</p>
                            </div>
                        </a>

                        {/* Location */}
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

                {/* Right: 2 vertical contact-method cards */}
                <div className="grid grid-cols-1 gap-5">
                    {contactMethods.map((method, index) => (
                        <motion.a
                            key={index}
                            href={method.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -4, boxShadow: '0 0 40px rgba(0,180,216,0.15)' }}
                            className="flex flex-col items-center p-8 rounded-2xl glass border border-border/30 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden cursor-pointer"
                        >
                            {/* Corner accent */}
                            <div className={`absolute top-0 right-0 w-24 h-24 ${method.accent} opacity-5 rounded-bl-[80px] -mr-8 -mt-8 group-hover:scale-110 transition-transform duration-700`} />

                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${method.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                <method.icon size={32} />
                            </div>

                            {/* Title / value / desc */}
                            <h3 className="text-xs font-bold text-text/40 uppercase tracking-widest mb-1">{method.title}</h3>
                            <p className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-center">{method.value}</p>
                            <p className="text-text/50 text-center mb-4 max-w-xs font-body text-sm leading-relaxed">{method.desc}</p>

                            {/* CTA pill */}
                            <div className="flex items-center space-x-2 px-6 py-2.5 rounded-full border border-primary/30 text-primary font-bold text-sm group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all duration-300 shadow-sm">
                                <span>Connect Now</span>
                                <ExternalLink size={15} />
                            </div>
                        </motion.a>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Contact;

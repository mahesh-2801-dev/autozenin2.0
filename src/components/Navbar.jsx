import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Demo', href: '/demo' },
        { name: 'Services', href: '/services' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-border/50' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3">
                    <motion.div
                        initial={{ opacity: 0, x: -20, rotate: -10 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-[10px] rounded-lg -z-10" />
                        <img
                            src={logo}
                            alt="AUTOZENIN Logo"
                            className="w-10 h-10 object-cover rounded-lg border border-primary/30 shadow-[0_0_15px_rgba(0,180,216,0.3)]"
                        />
                    </motion.div>
                    <span className="text-2xl font-heading font-bold tracking-tighter text-text">
                        AUTOZENIN
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`text-sm font-body transition-colors relative group ${location.pathname === link.href ? 'text-primary' : 'text-text/70 hover:text-primary'
                                }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                                }`} />
                        </Link>
                    ))}


                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-text p-2"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    to={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-2xl font-heading font-bold transition-colors ${location.pathname === link.href ? 'text-primary' : 'hover:text-primary'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}

                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

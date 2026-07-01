import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SEO from '../components/SEO';

// Client Images
import review1 from '../assets/images/review1.jpeg';
import review2 from '../assets/images/review2.jpeg';

const Testimonials = () => {
    const list = [
        {
            id: 1,
            project: "The Ride-Sharing Pre-Launch Campaign",
            quote: "Autozenin completely transformed our pre-launch strategy. They didn't just run basic social media ads; they built highly optimized registration funnels and automated our driver and rider waitlists from scratch. Their ability to combine smart paid advertising with automated WhatsApp sequences built massive momentum for our launch. They are true tech-driven growth partners.",
            name: "Mani Kanta",
            role: "Founder",
            company: "Trekso",
            image: review2
        },
        {
            id: 2,
            project: "E-Commerce & Inventory Management Build",
            quote: "The team at Autozenin built our entire e-commerce platform and integrated a custom backend inventory management system that completely streamlined our daily operations. Before them, scaling felt impossible due to backend chaos. Now, our storefront runs flawlessly, our stock updates in real-time, and we can handle high sales volume with zero stress. Truly a game-changer for our business.",
            name: "Founder",
            role: "Founder",
            company: "VoltStore",
            image: review1
        }
    ];

    return (
        <div className="pt-32 pb-24 container mx-auto px-6 min-h-screen flex flex-col justify-center">
            <SEO title="Testimonials" description="See what our wonderful clients have to say about the engineering and automation systems built by Autozenin." />

            {/* Title Header */}
            <div className="text-center mb-16 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-x-0 -top-10 bg-primary/10 blur-[100px] h-32 -z-10 w-72 mx-auto rounded-full" />
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 tracking-tighter">
                        Real Results. <span className="text-primary">Real Stories.</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-text/60 max-w-xl mx-auto">
                        See how we help founders automate overheads, streamline product launches, and scale operations.
                    </p>
                </motion.div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
                {list.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: idx * 0.2 }}
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        className="group relative p-8 rounded-3xl glass border border-primary/10 hover:border-primary/45 transition-all duration-500 shadow-2xl overflow-hidden flex flex-col justify-between"
                    >
                        {/* Quote icon background watermark */}
                        <Quote className="absolute top-6 right-6 text-primary/[0.04] group-hover:text-primary/[0.08] w-24 h-24 pointer-events-none transition-colors duration-500" />

                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[40px] -z-10 rounded-full" />

                        <div>
                            {/* Project Tag Badge */}
                            <span className="inline-block px-3 py-1.5 text-[10px] font-bold font-body tracking-widest text-primary bg-primary/5 border border-primary/20 rounded-full mb-6 uppercase">
                                {item.project}
                            </span>

                            {/* Testimonial Quote */}
                            <p className="text-text/75 font-body text-base md:text-lg mb-8 leading-relaxed italic">
                                "{item.quote}"
                            </p>
                        </div>

                        {/* Customer Avatar & Bio Detail Info */}
                        <div className="flex items-center mt-auto border-t border-border/20 pt-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/20 blur-[5px] rounded-full" />
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="relative w-12 h-12 rounded-full object-cover border border-primary/30 mr-4"
                                />
                            </div>
                            <div>
                                <h4 className="font-heading font-bold text-text text-base leading-tight">
                                    {item.name}
                                </h4>
                                <p className="font-body text-xs text-text/45 mt-0.5">
                                    {item.role}, <span className="text-primary font-semibold">{item.company}</span>
                                </p>
                            </div>
                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;

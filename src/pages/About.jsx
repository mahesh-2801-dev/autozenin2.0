import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="pt-32 pb-24 container mx-auto px-6">
      <SEO title="About" description="Learn about Autozenin's mission to provide 24/7 AI-driven responsiveness for businesses." />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8">
            Built by humans, <br />
            <span className="text-primary italic">driven by AI.</span>
          </h1>
          <p className="text-xl text-text/60 font-body leading-relaxed mb-12">
            Autozenin didn't start in a boardroom. It started from the frustration of seeing local businesses
            lose their hard-earned leads simply because it was 2 AM. We're on a mission to make 24/7 responsiveness
            the standard, not the exception.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-heading font-bold mb-4 text-primary">Why we exist</h3>
            <p className="text-text/60 font-body leading-relaxed">
              We believe business owners should be able to sleep without waking up to missed notifications.
              Our technology is designed to sit in the gap between "closed for the day" and "back in the morning."
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-heading font-bold mb-4 text-secondary">What makes us different</h3>
            <p className="text-text/60 font-body leading-relaxed">
              We don't build generic bots. We build empathetic agents that reflect your brand voice and
              understand the nuance of your specific industry.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-12 glass rounded-3xl border-primary/20"
        >
          <h2 className="text-3xl font-heading font-bold mb-6">Our Roots</h2>
          <p className="text-text/60 text-lg mb-4">
            Based in Vijayawada, Andhra Pradesh. Serving the world.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;

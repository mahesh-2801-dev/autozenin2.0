import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import pavanesh from '../assets/images/pavanesh.jpeg';
import bhavani from '../assets/images/bhavani.jpeg';
import mahesh from '../assets/images/mahesh.jpeg';

const founders = [
  {
    name: 'Gogineni Pavanesh',
    role: 'Founder & CEO',
    image: pavanesh,
    accent: 'primary',
  },
  {
    name: 'Kola Bhavani Prasad',
    role: 'Co-Founder & CTO',
    image: bhavani,
    accent: 'secondary',
  },
  {
    name: 'Ayinakota Mahesh',
    role: 'Co-Founder & Jr. Developer',
    image: mahesh,
    accent: 'primary',
  },
];

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

        {/* Meet the Founders */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Meet the <span className="text-primary italic">Founders</span>
            </h2>
            <p className="text-text/50 font-body text-lg">The minds behind Autozenin</p>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass rounded-3xl overflow-hidden group cursor-default"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {/* Photo */}
                <div className="relative overflow-hidden" style={{ height: '280px' }}>
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
                    }}
                  />
                  {/* Role badge */}
                  <div
                    className="absolute bottom-4 left-4 right-4 px-3 py-1 rounded-full text-xs font-body font-semibold tracking-widest uppercase text-center"
                    style={{
                      background:
                        founder.accent === 'primary'
                          ? 'rgba(var(--color-primary-rgb, 139,92,246), 0.25)'
                          : 'rgba(var(--color-secondary-rgb, 236,72,153), 0.25)',
                      border:
                        founder.accent === 'primary'
                          ? '1px solid rgba(139,92,246,0.5)'
                          : '1px solid rgba(236,72,153,0.5)',
                      color:
                        founder.accent === 'primary' ? '#a78bfa' : '#f472b6',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {founder.role}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-heading font-bold mb-1 tracking-wide">
                    {founder.name}
                  </h3>
                  <div
                    className="w-10 h-0.5 mx-auto rounded-full mt-3"
                    style={{
                      background:
                        founder.accent === 'primary'
                          ? 'linear-gradient(90deg, #8b5cf6, #a78bfa)'
                          : 'linear-gradient(90deg, #ec4899, #f472b6)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-12 glass rounded-3xl border-primary/20"
        >
          <h2 className="text-3xl font-heading font-bold mb-6">Our Roots</h2>
          <p className="text-text/60 text-lg mb-4">
            Based in Vijayawada, Andhra Pradesh. Serving businesses across India.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;

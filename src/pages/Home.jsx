import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ResultsStrip from '../components/ResultsStrip';
import ServicesPreview from '../components/ServicesPreview';
import PainPopup from '../components/PainPopup';

const Home = () => {
    return (
        <>
            <SEO title="Home" />
            <Hero />
            <ResultsStrip />
            <ServicesPreview />
            <section className="py-24 container mx-auto px-6">
                <div className="glass p-12 rounded-3xl border-primary/20 text-center">
                    <h2 className="text-3xl md:text-5xl font-heading mb-6">Revolutionizing Lead Management</h2>
                    <p className="text-text/60 max-w-2xl mx-auto text-lg">
                        Stop letting potential clients slip through the cracks. Our AI systems ensure every inquiry is met with
                        speed, precision, and a human touch — regardless of the hour.
                    </p>
                </div>
            </section>
            <PainPopup />
        </>
    );
};

export default Home;

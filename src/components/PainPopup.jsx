import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, MessageSquare } from 'lucide-react';

const PainPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const questions = [
        "Are you missing calls after office hours?",
        "Losing leads because no one follows up at night?",
        "Paying telecallers but still losing clients?"
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isVisible && !isFinished) {
            const interval = setInterval(() => {
                setCurrentQuestion((prev) => {
                    if (prev < questions.length - 1) return prev + 1;
                    setIsFinished(true);
                    return prev;
                });
            }, 2500);
            return () => clearInterval(interval);
        }
    }, [isVisible, isFinished, questions.length]);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="fixed bottom-6 right-6 z-[60] w-[calc(100vw-48px)] sm:w-[400px] glass rounded-2xl p-6 shadow-2xl border-primary/20 overflow-hidden"
        >
            {/* Background Animated Light */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] -z-10 rounded-full" />

            <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-text/40 hover:text-text transition-colors"
            >
                <X size={18} />
            </button>

            <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <MessageSquare size={20} className="text-primary" />
                </div>
                <div>
                    <h4 className="font-heading font-bold text-sm text-primary">AUTOZENIN ANALYZER</h4>
                    <div className="flex space-x-1 mt-1">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className={`h-1 rounded-full transition-all duration-500 ${i === currentQuestion || (isFinished) ? 'w-4 bg-primary' : 'w-2 bg-primary/20'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="min-h-[60px] mb-6">
                <AnimatePresence mode="wait">
                    {!isFinished ? (
                        <motion.p
                            key={currentQuestion}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="text-lg font-body font-medium text-text"
                        >
                            {questions[currentQuestion]}
                        </motion.p>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-4"
                        >
                            <p className="text-lg font-body font-bold text-secondary">
                                We have the solution.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    window.location.href = '#demo';
                                    setIsVisible(false);
                                }}
                                className="w-full py-3 bg-primary text-background font-bold rounded-xl flex items-center justify-center space-x-2"
                            >
                                <span>See how we fix this</span>
                                <ArrowRight size={18} />
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default PainPopup;

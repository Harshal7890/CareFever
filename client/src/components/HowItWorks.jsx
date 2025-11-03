import { Brain } from "lucide-react";
import React, { useState } from "react";

const steps = [
    {
        title: "Smart Symptom Analysis",
        description:
            "Connect to our AI system that analyzes your fever symptoms and history. One input. Comprehensive analysis.",

        image: "/Humans1.png",
    },
    {
        title: "Real-time Health Monitoring",
        description:
            "Know your fever patterns. Track what matters. No more guesswork about when to seek help.",

        image: "/Humans2.png",
    },
    {
        title: "Community & AI Insights",
        description:
            "Define your recovery path with AI-powered insights backed by community data. Keep your health journey informed.",

        image: "/Humans3.png",
    },
];

const HowItWorks = () => {
    const [activeImage, setActiveImage] = useState(steps[0].image);

    return (
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-light-primary dark:text-dark-primary">
                        How CareFever Works
                    </h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-light-primary-text dark:text-dark-primary-text sm:text-5xl">
                        Smart Fever Management Made Simple
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section - Always visible on the left */}
                    <div className="relative overflow-hidden rounded-2xl bg-gray-900/5 p-2 transition-all duration-500 ease-in-out">
                        <img
                            src={activeImage}
                            alt="Feature illustration"
                            className="w-full object-cover rounded-xl ring-1 ring-gray-900/10 transition-all duration-500 ease-in-out"
                            style={{ height: "500px" }}
                        />
                    </div>

                    {/* Steps Section - On the right */}
                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="p-6 transition-all duration-300 flex items-center gap-5 border-l-4 border-light-secondary/40 dark:border-dark-secondary/30 hover:bg-light-secondary/10 dark:hover:bg-dark-secondary/10 hover:border-light-secondary dark:hover:border-dark-secondary cursor-pointer"
                                onMouseEnter={() => setActiveImage(step.image)}>
                                <div className="bg-light-secondary  dark:bg-dark-secondary w-fit p-3 rounded-lg">
                                    <Brain size={36} color="white"/>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight text-light-primary-text dark:text-dark-primary-text">
                                        {step.title}
                                    </h3>
                                    <p className="mt-1 text-light-secondary-text dark:text-dark-secondary-text">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;

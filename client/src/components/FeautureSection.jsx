import { Brain, Users, LineChart } from "lucide-react";

const features = [
    {
        name: "AI-Powered Diagnosis",
        description:
            "Advanced AI algorithms analyze your symptoms and medical history to provide accurate fever-related guidance and recommendations.",
        icon: Brain, // Import Brain from lucide-react
    },
    {
        name: "Community Insights",
        description:
            "Benefit from anonymized data collected from thousands of fever cases, helping you understand patterns and typical recovery timelines.",
        icon: Users, // Import Users from lucide-react
    },
    {
        name: "Real-time Monitoring",
        description:
            "Track your fever progression, symptoms, and recovery journey with our intuitive dashboard and timely alerts.",
        icon: LineChart, // Import LineChart from lucide-react
    },
];

export default function FeatureSection() {
    return (
        <div className="overflow-hidden py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base/7 font-semibold text-light-primary dark:text-dark-primary">
                                Smart Healthcare Solutions
                            </h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-light-primary-text dark:text-dark-primary-text sm:text-5xl">
                                Intelligent Fever Care
                            </p>
                            <p className="mt-2 text-md text-light-secondary-text dark:text-dark-secondary-text">
                                Get reliable guidance and monitoring from the comfort of your home.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-light-secondary-text dark:text-dark-secondary-text lg:max-w-none">
                                {features.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className="relative pl-9">
                                        <dt className="inline font-semibold text-light-primary-text dark:text-dark-primary-text">
                                            <feature.icon
                                                aria-hidden="true"
                                                className="absolute top-1 left-1 size-5 text-light-secondary dark:text-dark-secondary"
                                            />
                                            {feature.name}:
                                        </dt>{" "}
                                        <dd className="inline text-light-secondary-text dark:text-dark-secondary-text">
                                            {feature.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        alt="Product screenshot"
                        src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                        width={2432}
                        height={1442}
                        className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    );
}

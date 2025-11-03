import React from "react";
import LandingPage from "../components/LandingPage";
import FeautureSection from "../components/FeautureSection";
import HowItWorks from "../components/HowItWorks";
import DisclaimerGuidelines from "../components/DisclaimerGuidelines";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

const Homepage = () => {
    return (
        <div>
            <LandingPage />
            <FeautureSection />
            <HowItWorks />
            <DisclaimerGuidelines/>
            <CTASection/>
            <Footer/>
        </div>
    );
};

export default Homepage;

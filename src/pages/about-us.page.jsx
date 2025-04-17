import AboutUsCompanyInfo from "@/components/siteSections/about-us-company-info";
import AboutUsHero from "@/components/siteSections/about-us-hero";
import CallToAction from "@/components/siteSections/call-to-action";
import CoreValues from "@/components/siteSections/core-values";

const AboutUsPage = () => {
    return (
        <main>
            <AboutUsHero />
            <AboutUsCompanyInfo />
            <CallToAction />
            <CoreValues />
            <CallToAction />
        </main>
    );
}

export default AboutUsPage;
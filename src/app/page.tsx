import AboutUs from "@/components/AboutUs";
import Blog from "@/components/Blog";
import ContactUs from "@/components/ContactUs";
import CurrentProjects from "@/components/CurrentProjects";
import HeroBanner from "@/components/HeroBanner";
import WebsiteHeader from "@components/WebsiteHeader";
import Footer from "@/components/Footer";
import { JSX } from "react";

export default function IndexView(): JSX.Element {
    return (
        <>
            <WebsiteHeader />
            <main className="space-y-32">
                <HeroBanner />
                <AboutUs />
                <CurrentProjects />
                <Blog />
                <ContactUs />
                <Footer />
            </main>
        </>
    );
}
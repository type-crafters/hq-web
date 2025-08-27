import AboutUs from "@/components/AboutUs";
import CurrentProjects from "@/components/CurrentProjects";
import HeroBanner from "@/components/HeroBanner";
import WebsiteHeader from "@components/WebsiteHeader";
import { JSX } from "react";

export default function IndexView(): JSX.Element {
    return (
        <>
            <WebsiteHeader />
            <main className="space-y-32">
                <HeroBanner />
                <AboutUs />
                <CurrentProjects />
            </main>
            <section className="h-screen"></section> {/* Scroll */}
        </>
    );
}
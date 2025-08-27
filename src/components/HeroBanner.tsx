import { JSX } from "react";
import ContainerSection from "@components/ContainerSection";

export default function HeroBanner(): JSX.Element {
    return (
        <ContainerSection id="hero-banner" size="container" className="py-24 text-center space-y-8" centered>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                Crafting Digital
                <span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-0% from-primary-500 to-100% to-accent-600"
                >&#32;Adventures</span>
            </h1>
            <ContainerSection size="4xl" className="text-xl text-center space-y-8" centered>
                <p className="w-full">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatibus quas totam temporibus, dignissimos distinctio
                    inventore repudiandae in dolorem tempora. Ipsa adipisci ea
                    cumque impedit dolores doloremque sequi, laudantium
                    reprehenderit autem.
                </p>
                <div id="call-to-action" className="w-full flex justify-center items-center gap-6">
                    <button
                        className="px-6 py-2 rounded bg-accent-800 flex items-center gap-3 cursor-pointer border-2 border-transparent hover:bg-transparent hover:border-accent-800 hover:text-accent-800 duration-200"
                    >
                        Explore our projects
                    </button>
                    <button
                        className="px-6 py-2 rounded bg-primary-800 flex items-center gap-3 cursor-pointer border-2 border-transparent hover:bg-transparent hover:border-primary-800 hover:text-primary-800 duration-200"
                    >
                        <i className="bi bi-discord" />
                        <span>Join our community</span>
                    </button>
                </div>
            </ContainerSection>
        </ContainerSection>
    );
}
import { JSX } from "react";
import ContainerSection from "./ContainerSection";
import ProjectCard from "./ProjectCard";

export default function CurrentProjects(): JSX.Element {
    return (
        <ContainerSection id="current-projects" size="container" className="text-center space-y-16" centered>
            <div className="space-y-8">
                <h2 className="text-4xl font-bold">Current Projects</h2>
                <ContainerSection size="4xl" className="text-xl text-center" centered>
                    <p>
                        Discover the apps and games we're currently developing
                        and get a glimpse into our creative process.
                    </p>
                </ContainerSection>
            </div>
            <ContainerSection size="full" className="grid grid-cols-1 lg:grid-cols-2 gap-8" centered>
                <ProjectCard
                    status="development"
                    name="Whisper"
                    image="/img/placeholder.svg"
                    details="Real-time Communication App"
                    description="..."
                    tags={["Servers", "Channels", "RTC"]}
                    href="#"
                />
                <ProjectCard
                    status="planning"
                    name="SFA Clone"
                    image="/img/placeholder.svg"
                    details="Space-themed Third-person Shooter"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta facilis quidem repudiandae, molestiae itaque expedita. Repellat cum quos sint minima dignissimos aliquam amet commodi quisquam natus numquam. Pariatur, dignissimos."
                    tags={["TPS", "Sci-fi", "Exploration"]}
                    href="#"
                />
            </ContainerSection>
        </ContainerSection>
    );
}
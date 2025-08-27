import { JSX } from "react";
import ContainerSection from "./ContainerSection";
import ProjectCard from "./ProjectCard";

export default function CurrentProjects(): JSX.Element {
    return (
        <ContainerSection id="current-projects" size="container"  className="text-center space-y-16" centered>
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
                <ProjectCard />
                <ProjectCard />
            </ContainerSection>
        </ContainerSection>
    );
}
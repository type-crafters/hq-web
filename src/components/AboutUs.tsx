import { JSX } from "react";
import ContainerSection from "@components/ContainerSection";
import TeamCard from "./TeamCard";

export default function AboutUs(): JSX.Element {
    return (
        <ContainerSection id="about-us" size="container" className="text-center space-y-16" centered>
            <div className="space-y-8">
                <h2 className="text-4xl font-bold">About us</h2>
                <ContainerSection size="4xl" className="text-xl text-center" centered>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Amet vel quod dolorum ducimus ipsum quasi ipsam
                        et impedit, neque distinctio minima at vitae labore,
                        cumque odio magni nulla, nemo culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellendus unde et id perferendis incidunt voluptatum asperiores?.
                    </p>
                </ContainerSection>
            </div>
            <ContainerSection size="full" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" centered>
                <TeamCard
                    picture="/img/link-profile-picture.png"
                    name="Alex Chen" role="Creative Director & Founder"
                    description="Former AAA game designer with 8+ years experience. Passionate about narrative-driven gameplay."
                />
                <TeamCard
                    picture="/img/link-profile-picture.png"
                    name="Alex Chen" role="Creative Director & Founder"
                    description="Former AAA game designer with 8+ years experience. Passionate about narrative-driven gameplay."
                />
                <TeamCard
                    picture="/img/link-profile-picture.png"
                    name="Alex Chen" role="Creative Director & Founder"
                    description="Former AAA game designer with 8+ years experience. Passionate about narrative-driven gameplay."
                />
                <TeamCard
                    picture="/img/link-profile-picture.png"
                    name="Alex Chen" role="Creative Director & Founder"
                    description="Former AAA game designer with 8+ years experience. Passionate about narrative-driven gameplay."
                />
                <TeamCard
                    picture="/img/link-profile-picture.png"
                    name="Alex Chen" role="Creative Director & Founder"
                    description="Former AAA game designer with 8+ years experience. Passionate about narrative-driven gameplay."
                />
                <TeamCard
                    picture="/img/link-profile-picture.png"
                    name="Alex Chen" role="Creative Director & Founder"
                    description="Former AAA game designer with 8+ years experience. Passionate about narrative-driven gameplay."
                />
            </ContainerSection>
        </ContainerSection>

    );
}
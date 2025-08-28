import { JSX } from "react";
import ContainerSection from "./ContainerSection";
import Link from "next/link";
import BlogList from "./BlogList";

export default function Blog(): JSX.Element {
    return (
        <ContainerSection id="blog" size="container" className="text-center space-y-4" centered>
            <div className="space-y-8">
                <h2 className="text-4xl font-bold">Latest from Our Blog</h2>
                <ContainerSection size="4xl" className="text-xl text-center" centered>
                    <p>
                        Stay updated with our development journey,
                        industry insights, and behind-the-scenes content.
                    </p>
                </ContainerSection>
            </div>
            <BlogList
                blogs={[
                    {
                        id: 1,
                        title: "Introducing Our New Game: Adventure Quest",
                        date: "2024-06-15",
                        description: "We are thrilled to announce our latest project, Adventure Quest, an epic journey through mystical lands filled with challenges and treasures.",
                        image: "/images/blog/adventure-quest.jpg",
                        url: "#"
                    },
                    {
                        id: 2,
                        title: "Behind the Scenes: Game Development Process",
                        date: "2024-05-30",
                        description: "Ever wondered how a game is made? Join us as we take you behind the scenes of our game development process, from concept to launch.",
                        image: "/images/blog/game-development.jpg",
                        url: "#"
                    },
                    {
                        id: 3,
                        title: "Top 5 Tips for Aspiring Game Developers",
                        date: "2024-05-10",
                        description: "Thinking about a career in game development? Here are our top 5 tips to help you get started and succeed in this exciting industry.",
                        image: "/images/blog/game-developer-tips.jpg",
                        url: "#"
                    }
                ]}
            />
            <Link
                href="#"
                className="flex gap-2 duration-200 bg-primary-600 border-2 border-transparent hover:bg-transparent hover:text-primary-800 hover:border-primary-800 rounded-lg px-6 py-2 w-fit mx-auto"
            >
                <span className="text-lg font-medium">View All Posts</span>
                <i className="bi bi-box-arrow-up-right text-xs"></i>
            </Link>
        </ContainerSection>
    );
}
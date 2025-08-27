import { JSX } from "react";
import ContainerSection from "./ContainerSection";
import Link from "next/link";

export default function Blog(): JSX.Element {
    return (
        <ContainerSection id="blog" size="container" className="text-center space-y-16" centered>
            <div className="space-y-8">
                <h2 className="text-4xl font-bold">Latest from Our Blog</h2>
                <ContainerSection size="4xl" className="text-xl text-center" centered>
                    <p>
                        Stay updated with our development journey,
                        industry insights, and behind-the-scenes content.
                    </p>
                </ContainerSection>
            </div>
            <ContainerSection size="full" className="grid" centered>
                <>

                </>
            </ContainerSection>
                <Link
                    href="#"
                    className="flex gap-2 duration-200 bg-primary-600 border-2 border-transparent hover:bg-transparent hover:text-primary-800 hover:border-primary-800 hover rounded-lg px-6 py-2 w-fit mx-auto"
                >
                    <span className="text-lg font-medium ">View All Posts</span>
                    <i className="bi bi-box-arrow-up-right text-xs"></i>
                </Link>
        </ContainerSection>
    );
}
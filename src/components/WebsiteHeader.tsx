import { JSX } from "react";

export default function WebsiteHeader(): JSX.Element {
    return (
        <header
            id="website-header"
            className="px-12 py-4 border-b border-secondary-500 text-lg font-medium shadow-lg sticky top-0 z-45 backdrop-blur-md bg-inherit/50"
        >
            <nav id="navigation-primary" className="flex items-center w-full">
                <h1 className="flex-1 text-3xl font-semibold font-sans">
                    <a href="#">TypeCrafters HQ</a>
                </h1>
                <ul className="flex items-center gap-8">
                    <li className="hover:text-primary-400 duration-150">
                        <a href="#about-us">About</a>
                    </li>
                    <li className="hover:text-primary-400 duration-150">
                        <a href="#current-projects">Projects</a>
                    </li>
                    <li className="hover:text-primary-400 duration-150">
                        <a href="#blog">Blog</a>
                    </li>
                    <li className="hover:text-primary-400 duration-150">
                        <a href="#contact-us">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
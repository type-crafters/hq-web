import { JSX } from "react";

export default function WebsiteHeader(): JSX.Element {
    return (
        <header
            id="website-header"
            className="px-12 py-4 border-b border-secondary-500 text-lg font-medium shadow-lg sticky top-0 z-45 backdrop-blur-md bg-inherit/50"
        >
            <nav id="navigation-primary" className="flex items-center w-full">
                <h1 className="flex-1 text-3xl font-semibold font-sans">
                    <a href="/">TypeCrafters HQ</a>
                </h1>
                <ul className="flex items-center gap-8">
                    <li className="hover:text-primary-400 duration-150">
                        <a href="">About</a>
                    </li>
                    <li className="hover:text-primary-400 duration-150">
                        <a href="">Projects</a>
                    </li>
                    <li className="hover:text-primary-400 duration-150">
                        <a href="">Contact</a>
                    </li>
                    <li className="hover:text-primary-400 duration-150">
                        <a href="">Blog</a>
                    </li>
                    <li className="hover:text-primary-400 duration-150">
                        <a href=""></a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
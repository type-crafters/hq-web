import { JSX } from "react";
import Link from "next/link";

export default function Footer(): JSX.Element {
    return (
        <>
            {/* <div className="bg-secondary-800">
                <div className="grid grid-cols-3 grid-rows-2 gap-4 px-5 py-2 w-full max-w-7xl mx-auto">
                    <div className="col-span-2 p-5 leading-8">
                        <div>TypeCrafters is a small developer team in Panama.</div>
                        <div>We are excited to make amazing experiences for --- developers and gamers. ---</div>
                    </div>
                    <div className="col-start-3 p-5">
                        <ul className="flex justify-end space-x-3 tracking-wider">
                            <li className="hover:text-blue-500 cursor-pointer">
                                <a href="#about-us">About</a>
                            </li>
                            <li className="hover:text-blue-500 cursor-pointer">
                                <a href="#current-projects">Projects</a>
                            </li>
                            <li className="hover:text-blue-500 cursor-pointer">
                                <a href="#blog">Blog</a>
                            </li>
                            <li className="hover:text-blue-500 cursor-pointer">
                                <a href="#contact-us">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-3 row-start-2 px-5 py-2">
                        <div>Copyright © 2025 TypeCrafters. All rights reserved.</div>
                    </div>
                </div>
            </div> */}

            <div className="bg-secondary-800">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
                    {/* GRID PRINCIPAL */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10">

                        {/* Texto */}
                        <div className="md:col-span-2 leading-8 text-center md:text-left">
                            <div>TypeCrafters is a small developer team in Panama.</div>
                            <div>
                                We are excited to make amazing experiences for developers and gamers.
                            </div>
                        </div>

                        {/* Navegación */}
                        <div className="md:col-span-2 flex flex-col items-center md:items-end justify-center gap-4">
                            <ul className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 text-sm md:text-base tracking-wider">
                                <li className="hover:text-primary-400 duration-150 cursor-pointer">
                                    <a href="#about-us">About</a>
                                </li>
                                <li className="hover:text-primary-400 duration-150 cursor-pointer">
                                    <a href="#current-projects">Projects</a>
                                </li>
                                <li className="hover:text-primary-400 duration-150 cursor-pointer">
                                    <a href="#blog">Blog</a>
                                </li>
                                <li className="hover:text-primary-400 duration-150 cursor-pointer">
                                    <a href="#contact-us">Contact</a>
                                </li>
                            </ul>

                            <div className="flex gap-6 text-2xl">
                                <Link href="#" className="text-secondary-400 hover:text-primary-400 duration-150">
                                    <i className="bi bi-youtube"></i>
                                </Link>
                                <Link href="#" className="text-secondary-400 hover:text-primary-400 duration-150">
                                    <i className="bi bi-twitter-x"></i>
                                </Link>
                                <Link href="#" className="text-secondary-400 hover:text-primary-400 duration-150">
                                    <i className="bi bi-instagram"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Footer inferior */}
                    <div className="border-t border-gray-600 text-center text-xs md:text-sm py-6">
                        <div>Copyright © 2025 TypeCrafters. All rights reserved.</div>
                    </div>
                </div>
            </div>


        </>
    );
}


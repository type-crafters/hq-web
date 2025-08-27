import { JSX } from "react";
import ContainerSection from "@components/ContainerSection";
import ContactForm from "./ContactForm";
import CopyButton from "./CopyButton";
import Link from "next/link";

export default function ContactUs(): JSX.Element {
    return (
        <ContainerSection id="contact" size="container" className="text-center space-y-16" centered>
            <div className="space-y-8">
                <h2 className="text-4xl font-bold">Get In Touch</h2>
                <ContainerSection size="4xl" className="text-xl text-center" centered>
                    <p>
                        Have a question, want to collaborate, or just
                        want to say hello? We'd love to hear from you.
                    </p>
                </ContainerSection>
            </div>
            <ContainerSection size="full" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch" centered>
                <div className="w-full">
                    <ContactForm />
                </div>
                <div className="w-full flex flex-col gap-8">
                    <CopyButton
                        id="copy-email"
                        value="typecrafters0@gmail.com"
                        className="w-full rounded-lg space-y-6 bg-secondary-600/20 backdrop-blur-md border-2 border-secondary-700 p-6"
                    >
                        <div className="flex gap-4 text-2xl font-semibold">
                            <i className="bi bi-envelope text-primary-400"></i>
                            <h3>Email</h3>
                        </div>
                        <div className="opacity-70 text-left text-lg">
                            <p>typecrafters0@gmail.com</p>
                        </div>
                    </CopyButton>
                    <CopyButton
                        id="copy-address"
                        value="https://maps.app.goo.gl/CKzaH9HaE8QzDfjJA"
                        className="w-full rounded-lg space-y-6 bg-secondary-600/20 backdrop-blur-md border-2 border-secondary-700 p-6"
                    >
                        <div className="flex gap-4 text-2xl font-semibold">
                            <i className="bi bi-geo-alt text-primary-400"></i>
                            <h3>Office</h3>
                        </div>
                        <div className="opacity-70 text-left text-lg">
                            <p>1054 Circunvalación St.</p>
                            <p>Ciudad de Panamá, PA</p>
                            <p>Panamá</p>
                        </div>
                    </CopyButton>
                    <CopyButton
                        id="copy-address"
                        value="(+507) 123-4567"
                        className="w-full rounded-lg space-y-6 bg-secondary-600/20 backdrop-blur-md border-2 border-secondary-700 p-6"
                    >
                        <div className="flex gap-4 text-2xl font-semibold">
                            <i className="bi bi-telephone text-primary-400"></i>
                            <h3>Phone</h3>
                        </div>
                        <div className="opacity-70 text-left text-lg">
                            <p>(+507) 123-4567</p>
                        </div>
                    </CopyButton>
                    <div className="w-full rounded-lg space-y-6 bg-secondary-600/20 backdrop-blur-md border-2 border-secondary-700 p-6">
                        <div className="flex">
                            <h3 className="text-2xl font-semibold">Follow Us</h3>
                        </div>
                        <div className="flex items-center gap-6 text-2xl">
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
            </ContainerSection>
        </ContainerSection>
    );
}
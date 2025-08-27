"use client";
import { JSX } from "react";

export default function ContactForm(): JSX.Element {
    return (
        <div className="w-full h-full p-6 flex flex-col gap-6 bg-secondary-600/20 backdrop-blur-md rounded-lg border-2 border-secondary-700">
            <div className="text-left space-y-2">
                <h3 className="text-2xl font-semibold">Send us a message</h3>
                <p className="opacity-70">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            <form className="flex-1 flex flex-col gap-8">
                <div className="flex gap-6">
                    <div className="flex-1 space-y-2">
                        <label className="block text-left font-semibold" htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="John"
                            className="w-full border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150" />
                    </div>
                    <div className="flex-1 space-y-2">
                        <label className="block text-left font-semibold" htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Doe"
                            className="w-full border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="block text-left font-semibold" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="john@example.com"
                        className="w-full border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150" />
                </div>
                <div className="space-y-2">
                    <label className="block text-left font-semibold" htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="What's this about?"
                        className="w-full border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150" />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <label className="block text-left font-semibold" htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Tell us more..."
                        className="flex-1 w-full resize-y border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150"
                        rows={5}
                    ></textarea>
                </div>
                <div>
                    <input
                        type="submit"
                        value="Send Message"
                        className="w-full font-semibold bg-primary-600 hover:bg-primary-800 py-1.5 cursor-pointer rounded-lg duration-150"
                    />
                </div>
            </form>
        </div>
    );
}
import Link from "next/link";
import { JSX } from "react";

export default function ProjectCard({
    status = "planning",
    name = "Whisper",
    image = "/img/placeholder.svg",
    details = "Real-time Communication App",
    description = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta facilis quidem repudiandae, molestiae itaque expedita. Repellat cum quos sint minima dignissimos aliquam amet commodi quisquam natus numquam. Pariatur, dignissimos.",
    tags = ["Servers", "Channels", "RTC"],
    href = "#"
}: Readonly<ProjectCardProps>): JSX.Element {
    const projectStatus: Record<ProjectCardProps["status"], Record<"color" | "text", string>> = {
        "planning": { color: "bg-info-600", text: "Planning" },
        "development": { color: "bg-success-600 ", text: "In Development" },
        "testing": { color: "", text: "QA Testing" },
        "openTesting": { color: "bg-blue-500", text: "Open Beta" },
        "earlyAccess": { color: "", text: "Early Access" },
        "ready": { color: "", text: "Awaiting Release" },
        "available": { color: "", text: "Released" },
        "paused": { color: "bg-warning-600", text: "Paused" },
        "canceled": { color: "bg-error-600", text: "Canceled" },
        "deprecated": { color: "bg-secondary-500", text: "Deprecated" }
    } as const;
    return (
        <div className="group w-full bg-secondary-600/20 flex flex-col gap-6 py-6 relative border-2 border-secondary-700 backdrop-blur-md rounded-lg hover:brightness-105 duration-200">
            <span
                role="presentation"
                className={`absolute z-5 top-8 left-4 px-3 py-0.5 font-semibold text-sm rounded ${projectStatus[status].color}`}
            >{projectStatus[status].text}</span>
            <figure className="w-full aspect-[5/2] h-auto overflow-hidden group-hover:scale-y-105 duration-200">
                <img src={image} alt={name} className="w-full h-full object-cover object-center" />
            </figure>
            <div className="w-full flex-1 flex flex-col items-start px-4 gap-4">
                <div className="w-full">
                    <h3 className="text-3xl font-semibold text-left">{name}</h3>
                    <p className="text-left text-primary-400">{details}</p>
                </div>
                <div className="flex-1">
                    <p className="text-left">{description}</p>
                </div>
                <div className="flex w-full justify-start gap-4 my-1">
                    {tags.map((tag, i) => (
                        <span key={i} className="px-3 py-0.5 bg-secondary-200 text-black rounded-lg font-medium text-sm">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="w-full">
                    <Link href={href} className="flex justify-center gap-2 bg-primary-600 hover:bg-primary-800 py-1.5 cursor-pointer rounded-lg duration-150">
                        <span>Learn More</span>
                        <i className="bi bi-box-arrow-up-right text-xs"></i>
                    </Link>
                </div>
            </div>

        </div>
    );
}

interface ProjectCardProps {
    status:
    | "planning"
    | "development"
    | "testing"
    | "openTesting"
    | "earlyAccess"
    | "ready"
    | "available"
    | "paused"
    | "canceled"
    | "deprecated";
    name: string;
    image: string;
    details: string;
    description: string;
    tags: string[];
    href: string;
}

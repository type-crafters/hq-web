import { JSX } from "react";

export default function TeamCard({
    picture,
    name,
    role,
    description
}: Readonly<TeamCardProps>): JSX.Element {
    return (
        <figure
            className="w-full p-4 flex flex-col gap-4 items-center border-2 border-secondary-700 bg-secondary-600/20 backdrop-blur-md rounded-lg"
        >
            <div
                className="w-32 h-32 aspect-square rounded-full flex justify-center items-center overflow-hidden"
            >
                <img
                    src={picture}
                    alt={`${name}'s profile`}
                    className="w-full h-full"
                />
            </div>
            <figcaption className="flex flex-col gap-6">
                <div>
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <span className="text-primary-400">{role}</span>
                </div>
                <p>{description}</p>
            </figcaption>
        </figure>
    );
}

interface TeamCardProps {
    picture: string;
    name: string;
    role: string;
    description: string;
}
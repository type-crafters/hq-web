import { JSX, ReactNode } from "react";

export default function ContainerSection({
    id,
    size = "full",
    centered = true,
    className,
    children
}: Readonly<ContainerSectionProps>): JSX.Element {
    const maxWidthMap: Record<NonNullable<ContainerSectionProps["size"]>, string> = {
        "7xl": "max-w-7xl",
        "6xl": "max-w-6xl",
        "5xl": "max-w-5xl",
        "4xl": "max-w-4xl",
        "3xl": "max-w-3xl",
        "2xl": "max-w-2xl",
        "xl": "max-w-xl",
        "lg": "max-w-lg",
        "md": "max-w-md",
        "sm": "max-w-sm",
        "xs": "max-w-xs",
        "2xs": "max-w-2xs",
        "3xs": "max-w-3xs",
        "container": "container",
        "full": "w-full",
    } as const;

    return (
        <section id={id} className={`px-4 scroll-mt-20 ${centered && "mx-auto"} ${maxWidthMap[size]} ${className}`}>
            {children}
        </section>
    );
}

interface ContainerSectionProps {
    id?: string;
    size?: "container" | "full" | "7xl" | "6xl" | "5xl" | "4xl" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs" | "2xs" | "3xs"
    centered?: boolean;
    className?: string;
    children: ReactNode;
}
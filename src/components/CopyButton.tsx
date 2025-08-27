"use client";
import { JSX, ReactNode, useState } from "react";

export default function CopyButton({
    id,
    value,
    className,
    children
}: CopyButtonProps): JSX.Element {
    const [renderFeedback, setRenderFeedback] = useState<boolean>(false);
    const copyValue = () => {
        navigator.clipboard.writeText(value);
        setRenderFeedback(true);

        return setTimeout(() => setRenderFeedback(false), 5000);
    };
    return (
        <button
            id={id} 
            onClick={copyValue}
            title={`Copy '${value}'`}
            className={`${className} relative cursor-pointer`}
        >
            {renderFeedback &&
                <span
                    role="presentation"
                    className="flex items-center gap-1 bg-success-600 rounded absolute top-4 right-4 px-3 py-0.5 text-sm font-semibold"
                    
                >
                    <i className="i bi-check-lg"></i>
                    <span>Copied!&nbsp;</span>
                </span>
            }
            {children}
        </button>
    );
}

export interface CopyButtonProps {
    id?: string;
    value: string;
    className?: string;
    children?: ReactNode;
}
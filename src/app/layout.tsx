import { ReactNode, type JSX } from "react";
import "@styles/index.css";

export default function IndexLayout({
    children
}: IndexLayoutProps): JSX.Element {
    return (
        <html>
            <head>

            </head>
            <body>
                {children} 
            </body>
        </html>
    );
}

interface IndexLayoutProps {
    children: ReactNode;
}
import { ReactNode, JSX } from "react";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "@styles/index.css";

export default function IndexLayout({
    children
}: Readonly<IndexLayoutProps>): JSX.Element {
    return (
        <html lang="en">
            <body>
                {children} 
            </body>
        </html>
    );
}

interface IndexLayoutProps {
    children: ReactNode;
}
import { ReactNode } from "react";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";

interface LayoutProps {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (
        <div data-theme="light">
            <TopBar/>
            <main>{children}</main>
            <BottomBar/>
        </div>
    )
}
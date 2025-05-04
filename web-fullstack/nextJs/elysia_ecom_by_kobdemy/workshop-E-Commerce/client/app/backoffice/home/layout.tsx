import "../../globals.css";
import SideBar from "./components/SideBar";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div className="flex">
            <div>
                <SideBar />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

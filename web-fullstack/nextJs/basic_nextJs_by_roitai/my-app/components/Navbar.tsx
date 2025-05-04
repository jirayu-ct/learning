import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white mb-4">
            <div className="flex justify-center items-center gap-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/camp">Camp</Link>
                <Link href="/info">Info</Link>
            </div>
            <div className="flex justify-center items-center gap-4">
                <Link href={"/login"}>Login</Link>
                <Link href={"/register"}>Register</Link>
            </div>
        </nav>
    )
}
export default Navbar
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex gap-4">
      <Link href='/'>Home</Link>
      <Link href='/product'>Product</Link>
      <Link href='/employee'>Employee</Link>
    </div>
  )
}
export default Navbar
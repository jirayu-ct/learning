import { NavLink } from "react-router";

const NavLinkExample = () => {
  return (
    <div className="flex gap-4">
        <NavLink to='/employee' >employee</NavLink>
        <NavLink to='/product' >product</NavLink>
        <NavLink to='/employee/10' >employee Info</NavLink>
    </div>
  )
}
export default NavLinkExample
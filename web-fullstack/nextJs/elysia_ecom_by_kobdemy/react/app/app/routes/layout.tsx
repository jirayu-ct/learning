import { Outlet } from "react-router";
import NavLinkExample from "./NavLinkExample";



const layout = () => {
  return (
    <>
        <NavLinkExample/>
        <Outlet />
    </>
  )
}
export default layout
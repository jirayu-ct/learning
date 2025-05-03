import type { Route } from "../+types/root"



const employeeInfo = ({params}: Route.LoaderArgs) => {
    const id = params.id

  return (
    <div>
        id = {id}
    </div>
  )
}
export default employeeInfo
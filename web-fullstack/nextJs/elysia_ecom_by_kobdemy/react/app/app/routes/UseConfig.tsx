import { Config } from "~/config"



const UseConfig = () => {

    return (
        <div>
            <div>
                api url = {Config.apiUrl}
            </div>
            <div>
                secrat = {Config.secretKey}
            </div>
        </div>
    )
}
export default UseConfig
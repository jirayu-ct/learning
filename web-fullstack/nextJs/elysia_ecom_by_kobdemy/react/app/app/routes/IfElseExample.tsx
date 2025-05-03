import { useState } from "react"

const IfElseExample = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const isLoggedInText = () => {
        if(isLoggedIn){
            return 'Welcome to the app'
        }
        else{
            return 'please Login'
        }
    }

  return (
    <div>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {
                isLoggedIn
                ? 'Logout'
                : 'Login'
            }
        </button>

        {
            isLoggedIn 
            ? <div>Welcome to the app</div>
            : <div>Please Login</div>
        }

        { isLoggedInText() }
    </div>
  )
}
export default IfElseExample
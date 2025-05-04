'use client'

import { Config } from "@/app/config"
import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"

const page = () => {
    const router = useRouter()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = async () => {
        try {
            // http://localhost:5000/api/admin/login
            const url = Config.apiUrl + '/api/admin/login';
            const payload = {
                username: username,
                password: password
            }
            const result = await axios.post(url, payload);
            if (result.data.token != null) {
                localStorage.setItem(Config.tokenName, result.data.token);
                router.push('/backoffice/home/dashboard')
            }
        } catch (err: any) {
            console.log(err)
            Swal.fire({
                title: 'error',
                text: err.message,
                icon: 'error'
            })
        }
    }

    return (
        <div className="signin-block">
            <div className="signIn">
                <h1>Sign In</h1>
                <div>
                    <div>username</div>
                    <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <div>password</div>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit' onClick={handleSignIn}>Sign In</button>
            </div>
        </div>
    )
}
export default page
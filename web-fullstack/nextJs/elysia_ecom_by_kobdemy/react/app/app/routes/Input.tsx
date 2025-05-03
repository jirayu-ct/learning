import { useState } from "react"

const Input = () => {
    const [ name, setName ] = useState('')

    return (
        <>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
            />
            <p>hello, { name }</p>
        </>
    )
}
export default Input
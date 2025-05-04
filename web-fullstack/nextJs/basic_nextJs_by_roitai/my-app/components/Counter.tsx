'use client'

import { useState } from "react"


const Counter = () => {

    const [count, setCount] = useState(0)


    return (
        <div className="flex items-center justify-center gap-4">
            <button
                className="bg-blue-500 text-white p-2 rounded-md"
                onClick={() => setCount(count - 1)}
            >-</button>
            <span className="text-2xl font-bold">{count}</span>
            <button
                className="bg-blue-500 text-white p-2 rounded-md"
                onClick={() => setCount(count + 1)}
            >+</button>
        </div>
    )
}
export default Counter
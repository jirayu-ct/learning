import { useEffect, useState } from "react"

const UseEffectExample = () => {

    const [name, setName] = useState('')

    useEffect(() => {
        console.log('name changed', name)
    }, [name])

  return (
    <div>
        <p>Name: {name}</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  )
}
export default UseEffectExample
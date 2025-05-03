import { useRef } from "react"

const UseRefExample = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    const labelRef = useRef<HTMLLabelElement>(null)

    const handleFocus = () => {
        inputRef.current?.focus()
    }


    const handleLabelChangeText =() => {
      if(labelRef.current){
        labelRef.current.textContent = "New Text"
      }
    }

  return (
    <div>
        <label ref={labelRef} />
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus}>Forcus</button>
        <button onClick={handleLabelChangeText}>Chang Text</button>
    </div>
  )
}
export default UseRefExample
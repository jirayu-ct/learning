import { useEffect, useState } from "react"

const UseEffectExample2 = () => {
    const [totalItems, setTotalItems] = useState(0)
    const [items, setItems] = useState<string[]>([]);

    useEffect(() => {
        setTotalItems(items.length)
    }, [items])

    const addItem = () => {
        setItems([...items, "item"])
    }

    const clearItems = () => {
        setItems([])
    }

  return (
    <>
        <div>Total Items: {totalItems}</div>
        <div>Total Length: {items.length}</div>
        <div>
            <button onClick={addItem}>Add Item</button>
            <button onClick={clearItems}>clear Item</button>
        </div>
    </>
  )
}
export default UseEffectExample2
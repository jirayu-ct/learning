import type { useState } from "react"
import { useSearchParams } from "react-router"

// http://localhost:5173/use-query-string?name=jirrayu&age=20
const QueryStringExample = () => {

    const [searchParams, setSearchParams] =  useSearchParams()

    const name = searchParams.get('name')
    const age = searchParams.get('age')

  return (
    <div>
        <h1>Query String Example</h1>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
    </div>
  )
}
export default QueryStringExample
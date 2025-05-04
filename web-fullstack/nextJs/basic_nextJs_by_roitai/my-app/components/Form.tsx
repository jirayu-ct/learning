'use client'

import { createCamp } from "@/utils/actions"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"

const SubmitButton = () => {
    const { pending } = useFormStatus()

    return <button type="submit" disabled={pending}>
        {
            pending
            ? 'Loading...'
            : 'Submit'
        }
    </button>
}

const Form = () => {

    const [message, formAction] = useActionState(createCamp, null)

    return (
        <>
        {
            message && <h1>{message}</h1>
        }
            <form action={formAction}>
                Form
                <input
                    type="text"
                    name="title"
                    placeholder="Camping Name"
                    defaultValue="Burirum cafe 121"
                    className="border"
                />
                <input
                    type="text"
                    name="location"
                    placeholder="location"
                    defaultValue="burirum"
                    className="border"
                />
                <SubmitButton />
            </form>
        </>
    )
}
export default Form
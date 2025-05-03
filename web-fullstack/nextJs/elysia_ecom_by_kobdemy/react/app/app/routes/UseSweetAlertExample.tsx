import { useState } from 'react'
import Swal from 'sweetalert2'

const UseSweetAlertExample = () => {

    const [age, setAge] = useState(0);

    const handleChange = (value: string) => {
        try {
            const ageValue = Number(value)
            if (isNaN(ageValue)) throw new Error('Invaalid age')
            setAge(ageValue)
        }
        catch {
            Swal.fire({
                title: 'Error',
                text: 'Please Enter a valid age',
                icon: 'error'
            })
            setAge(0)
        }
    }

    return (
        <div>
            <span>age</span>
            <input
                className='border border-gray-100'
                onChange={(e) => handleChange(e.target.value)}
            />
            <span>{age}</span>
        </div>
    )
}
export default UseSweetAlertExample
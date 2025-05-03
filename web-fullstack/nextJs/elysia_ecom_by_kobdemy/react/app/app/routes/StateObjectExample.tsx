import { useEffect, useState } from "react"


const StateObjectExample = () => {

    const [employee, setEmployee] = useState({
        name: '',
        salary: 0
    })


    console.log('employee: ', employee)

    return (
        <>
            <div>Employee</div>
            <div>
                <span>Name: </span>
                <input
                    type="text"
                    onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
                />
                <span>Chang Name: { employee.name }</span>
            </div>

            <div>
                <span>Salary: </span>
                <input
                    type="number"
                    onChange={(e) => setEmployee({ ...employee, salary: Number(e.target.value) })}
                />
                <span>Chang Salary: { employee.salary }</span>
            </div>
        </>
    )
}
export default StateObjectExample
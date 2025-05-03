import type { EmployeeInterface } from "~/interface/employeeInterface"

const ArrayAndMapExample = () => {

    const languages = ['java', 'javaScript', 'Python', 'TypeScript']
    const employees: EmployeeInterface[] = [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'John2', age: 31 },
        { id: 3, name: 'John3', age: 32 },
    ]

    return (
        <div>
            <div>

                {
                    languages.map((languages, index) => (
                        <div key={index}>
                            {languages}
                        </div>
                    ))
                }
            </div>
            <hr />
            <div>
                {
                    employees.map((employee) => (
                        <div key={employee.id}>
                            {employee.id} - {employee.name} - {employee.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ArrayAndMapExample
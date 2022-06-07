import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// component to display all of the employee information when linked is clicked, 🦖🦖for some reason receiving error when using .toLocaleString("en-US", { style: "currency", currency: "USD" }) on the pay rate🦩🦩

export const EmployeeDetails = () => { 
    const {employeeId} = useParams()
    
    // state variable for the individual employee object
    const [ employee, updateEmployee ] = useState({})

    // useEffect to fetch the individual employee data with their employeeId, observing employeeId 
    useEffect(
        () => { 
            fetch(`http://localhost:8088/employees?_expand=user&_expand=location&userId=${employeeId}`)
            .then(response => response.json())
            .then((data) => { 
                const singleEmployee = data[0]
                updateEmployee(singleEmployee)
            })
        },
        [employeeId]
    )

    return <section className="employee">
        <header className="employee__header">Name: {employee?.user?.name}</header>
        <div>Location: {employee?.location?.address}</div>
        <div>Email: {employee?.user?.email}</div>
        <div>Start Date: {employee.startDate}</div>
        <div>Pay Rate: ${employee.payRate}</div>
    </section>
}

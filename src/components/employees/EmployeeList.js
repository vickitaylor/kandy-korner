import { useState, useEffect } from "react"
import { Employees } from "./Employees"
import { useNavigate } from "react-router-dom"
import "./Employee.css"


export const EmployeeList = () => { 
    
    const [ employees, setEmployees ] = useState([])
    const navigate = useNavigate()

    // useEffect for getting the employees, users, and locations from the API, observing initial state
    useEffect(
        () => {
            fetch(`http://localhost:8088/employees?_expand=user&_expand=location`)
                .then(response => response.json())
                .then((employeeArray) => {
                    setEmployees(employeeArray)
                })
        },
        []
    )
    
    // passing thru the Employees component to display the employee details, and using props for the employee properties.
    return <>
        <button onClick={() => navigate("/employee/create")}>Add Employee</button>
        <h3>Employees</h3>
        
        <article className="employees">
        {
            employees.map((employee) => <Employees key={`employee--${employee.id}`}
            id={employee.userId}
            name={employee?.user?.name}
            email={employee?.user?.email}
            location={employee?.location?.address}
            /> )
        } 
    </article>
    </>
}
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


// form to add new employees to the api
export const EmployeeForm = () => {

    // creating new state to add a new employee to the users api
    const [user, addUser] = useState({
        name: "",
        email: "",
        isStaff: true
    })

    // creating new state to add the new employee to the employees api
    const [employee, addEmployee] = useState({
        userId: "",
        startDate: "",
        payRate: "",
        locationId: ""
    })

    const navigate = useNavigate()

    // state for locations
    const [locations, setLocations] = useState([])


    // useEffect to get locations, observing initial state
    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
                .then(response => response.json())
                .then((locationArr) => {
                    setLocations(locationArr)
                })
        },
        []
    )


    const saveButtonClick = (event) => {
        event.preventDefault()

        // object to save new user object to Api when clicked
        const userToApi = {
            name: user.name,
            email: user.email,
            isStaff: true
        }

        // preforming fetch to POST the user object to the API
        return fetch(`http://localhost:8088/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userToApi)
        })
            .then(response => response.json())
            // once user is posted, then posting employee to API
            .then((newUser) => {
                const employeeToApi = {
                    userId: newUser.id,
                    startDate: employee.startDate,
                    payRate: parseFloat(employee.payRate, 2),
                    locationId: parseInt(employee.locationId)
                }
                fetch(`http://localhost:8088/employees`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(employeeToApi)
                })
                    .then(response => response.json())
                    .then(() => {
                        navigate("/employee")
                    })

            })
    }


    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label className="employee__heading" htmlFor="name">Employee Name:</label>
                    <input required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Employee Name"
                        value={user.name}
                        onChange={
                            (event) => {
                                const copy = { ...user }
                                copy.name = event.target.value
                                addUser(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label className="employee__heading" htmlFor="email">Employee Email:</label>
                    <input required autoFocus
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        value={user.email}
                        onChange={
                            (event) => {
                                const copy = { ...user }
                                copy.email = event.target.value
                                addUser(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group dropdown">Employee Location:<br />
                    <select id="location" required autoFocus
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.locationId = event.target.value
                                addEmployee(copy)
                            }}>
                        <option value="0">Choose Location:</option>
                        {locations.map((location) => {
                            return <option value={location.id} key={`location--${location.id}`}>
                                {location.address}</option>
                        })}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label className="employee__heading" htmlFor="startDate">Start Date:</label>
                    <input required autoFocus
                        type="date"
                        className="form-control"
                        placeholder="Enter Start Date"
                        value={employee.startDate}
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.startDate = event.target.value
                                addEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label className="product__heading" htmlFor="pay">Pay Rate: </label>
                    <input
                        required autoFocus
                        type="number"
                        min="0.00" step="0.01"
                        className="form-control"
                        placeholder="Starting Pay"
                        value={employee.payRate}
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.payRate = event.target.value
                                addEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>

            <button onClick={(clickEvent) => saveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit New Employee
            </button>
        </form>
    )
}
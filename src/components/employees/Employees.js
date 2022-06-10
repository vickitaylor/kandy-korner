import { Link } from "react-router-dom"
import { deleteEmployee } from "../ApiManager"

// component to show a list of employees. has a fire employee button that will remove the employee from the database and then render the employee list when clicked

export const Employees = ({ id, name, email, location, getAllEmployees }) => {

    const fireEmployeeButton = () => {
        return <button
            onClick={()=> {
                deleteEmployee(id)
                .then(() => {
                    getAllEmployees()
                })
            }}
            className="button__fire">Fire Employee</button>
    }

    return <section className="employee">
        <div>
            <Link to={`/employee/${id}`}>Name: {name}</Link>
        </div>
        <div>Email: {email} </div>
        <div>Location: {location}</div>
        {
            fireEmployeeButton()
        }
    </section>
}
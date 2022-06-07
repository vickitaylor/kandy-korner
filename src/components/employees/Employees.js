import { Link } from "react-router-dom"

// component to show a list of employees. 

export const Employees = ({ id, name, email, location}) => {
    return <section className="employee">
        <div>
            <Link to={`/employee/${id}`}>Name: {name}</Link>
        </div>    
        <div>Email: {email} </div>
        <div>Location: {location}</div>
    </section> 
}
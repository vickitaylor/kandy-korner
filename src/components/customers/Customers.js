import { Link } from "react-router-dom"

// component for CustomerList to display a list of customers, name and email only, with a link in their name to additional details
export const Customers = ({id, name, email}) => { 
    return <section className="customer">
        <div>
            <Link to={`/customer/${id}`}>Name: {name}</Link> 
        </div>
        <div>Email: {email}</div>
    </section> 
}
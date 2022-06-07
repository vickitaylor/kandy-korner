import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"


// Navbar display function, added links for locations and products
export const CustomerNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li>
                <Link className="navbar__item" to="/locations">Locations</Link>
            </li>
            
            <li>
                <Link className="navbar__item" to="/products">Products</Link>
            </li>

            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", { replace: true })
                }}>Logout</Link>
            </li>
        </ul>
    )
}

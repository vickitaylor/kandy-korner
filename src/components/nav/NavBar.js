import { EmployeeNav } from "./EmployeeNav"
import { CustomerNav } from "./CustomerNav"
import "./NavBar.css"


// Navbar display component, split for customer and employee views.  component determines what kind of user is signed in, then displays the correct view.
export const NavBar = () => {
    
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    if (kandyUserObject.staff) { 
        return < EmployeeNav />
    } else { 
        return < CustomerNav />
    }
}


import { CustomerViews } from "./CustomerViews"
import { EmployeeViews } from "./EmployeeViews"


// if statement to determine who is logged in to show a certain view depending on the user.
export const ApplicationViews = () => {
	
	const localKandyUser = localStorage.getItem("kandy_user")
	const KandyUserObject = JSON.parse(localKandyUser)
	
	if (KandyUserObject.staff) {
		return < EmployeeViews /> 
	} else { 
		return < CustomerViews />
	}

}


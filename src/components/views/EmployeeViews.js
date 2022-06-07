import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/LocationList"
import { EmployeeProductsList } from "../products/EmployeeProductsList"
import { ProductForm } from "../products/ProductForm"
import { EmployeeList } from "../employees/EmployeeList"
import { EmployeeForm } from "../employees/EmployeeForm"
import { CustomerList } from "../customers/CustomerList"
import { CustomerDetails } from "../customers/CustomerDetails"
import { EmployeeDetails } from "../employees/EmployeeDetails"

export const EmployeeViews = () => {
	return (
		<Routes>
			<Route path="/" element= {
				<>
					<h2>Kandy Korner</h2>
					<div>The best candy store on the planet 🌎!</div>

					<Outlet />
				</>
			}>

				<Route path="locations" element={<LocationList />} />
				<Route path="products" element={ <EmployeeProductsList />} />
				<Route path="products/create" element={ <ProductForm /> } />
				<Route path="employee" element={ <EmployeeList /> } />
				<Route path="employee/:employeeId" element={ <EmployeeDetails />} />
				<Route path="employee/create" element={ <EmployeeForm /> } />
				<Route path="customer" element={ <CustomerList />} />
				<Route path="customer/:customerId" element={ <CustomerDetails />} />

			
			</Route>
		</Routes>
	)


}


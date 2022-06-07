import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/LocationList"
import { CustomerProductsList } from "../products/CustomerProductsList"
import { ProductContainer } from "../products/ProductContainer"

export const CustomerViews = () => {
	return (
		<Routes>
			<Route path="/" element= {
				<>
					<h2>Kandy Korner</h2>
					<div>The best candy store on the planet 🌎!</div>

					<Outlet />
				</>
			}>

				<Route path="locations" element={ <LocationList />} />
				<Route path="products" element= { <ProductContainer/> } />
				<Route path="products" element={ <CustomerProductsList />} />
 
			</Route>
		</Routes>
	)


}

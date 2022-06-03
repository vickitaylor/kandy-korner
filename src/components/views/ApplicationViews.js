import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/LocationList"
import { ProductsList } from "../products/ProductsList"
import { ProductForm } from "../products/ProductForm"

export const ApplicationViews = () => {
	return (
		<Routes>
			<Route path="/" element= {
				<>
					<h2>Kandy Korner</h2>
					<div>The best candy store around!</div>

					<Outlet />
				</>
			}>

				<Route path="locations" element={<LocationList />} />
				<Route path="products" element={ <ProductsList />} />
				<Route path="products/create" element={ <ProductForm /> } />
			</Route>
		</Routes>
	)


}


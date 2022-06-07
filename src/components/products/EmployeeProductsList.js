import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import "./Products.css"


// added prop to the component for the searched products 
// component to display the products list. refactored some as only displaying for an employee logging in

export const EmployeeProductsList = ({ searchTermState }) => {
    // defined a state variable for the Products
    const [products, setProducts] = useState([])
    // defined new state variable for filtered products. 
    const [filteredProducts, setFiltered] = useState([])
    // defined new state variable for higher priced items
    const [topPricedProducts, setTopPrice] = useState(false)

    // saving useNavigate to a variable 
    const navigate = useNavigate()

    // useEffect to fetch the products from the API, used _sort to sort the products by name and _expand to get the types associated with the products, once received it will be stored in the productArray and then set to the state variable 
    useEffect(
        () => {
            fetch(`http://localhost:8088/products?_sort=name&_expand=productType`)
                .then(response => response.json())
                .then((productsArray) => {
                    setProducts(productsArray)
                })
        },
        []
    )

    // useEffect to display the products.  Product names are sorted in the fetch
    useEffect(
        () => {
            setFiltered(products)
        },
        [products]
    )

    // useEffect to determine which products cost more than $2.00. the array it is watching is topPricedProducts.  A new variable was declared.  Observing the topPricedProducts state
    useEffect(
        () => {
            if (topPricedProducts) {
                const highPrice = products.filter(product => {
                    return product.price >= 2.00
                })
                setFiltered(highPrice)
            } else {
                setFiltered(products)
            }
        },
        [topPricedProducts]
    )

    // jsx to display the products
    // button added to display products over $2.00 and show all button.
    return <>
        <button onClick={() => setTopPrice(true)}>Top Priced</button>
        <button onClick={() => setTopPrice(false)}>Show All</button>
        <button onClick={() => navigate("/products/create")}>Add Product</button>

        <h2>Products</h2>

        <article className="products">
            {
                filteredProducts.map((product) => {
                    return <section className="product" key={product.id}>
                        <header>{product.name}</header>
                        <div>Price: {product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>
                        <div>Product Type: {product?.productType?.type}</div><br />
                    </section>
                })
            }

        </article>
    </>

}
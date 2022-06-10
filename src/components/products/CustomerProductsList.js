import { useEffect, useState } from "react"
import "./Products.css"


// added prop to the component for the searched products.
// component to display the products list. refactored some just for the customer view

export const CustomerProductsList = ({ searchTermState }) => {
    // defined a state variable for the Products
    const [products, setProducts] = useState([])
    // defined new state variable for filtered products. 
    const [filteredProducts, setFiltered] = useState([])
    const [customers, setCustomers] = useState([])


    // useEffect to fetch the products from the API, used _sort to sort the products by name and _expand to get the types associated with the products, once received it will be stored in the productArray and then set to the state variable 

    // function to fetch products from the API, tried a different way to write the useEffect 
    const getAllProducts = () => {
        fetch(`http://localhost:8088/products?_sort=name&_expand=productType`)
            .then(response => response.json())
            .then(setProducts)
    }

    useEffect(
        () => {
            getAllProducts()
        },
        []
    )

    // to get customers for the purchase onCLick 
    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user`)
                .then(response => response.json())
                .then((customerArr) => {
                    setCustomers(customerArr)
                })
        },
        []
    )


    const localKandyUser = localStorage.getItem("kandy_user")
    const KandyUserObject = JSON.parse(localKandyUser)
    const userId = customers.find(customer => customer.userId === KandyUserObject.id)
 

    // function to display and purchase products. 🦖🦖cant get to work since product is not defined...🦩🦩
    // const purchaseCandyButton = () => {
    //     <button onClick={() => {
    //         return fetch(`http://localhost:8088/purchases`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 customerId: userId.id,
    //                 productId: parseInt(product.id),
    //                 amount: 1
    //             })
    //         })
    //             .then(response => response.json())
    //             .then(() => {
    //                 getAllProducts()
    //             })
    //     }}>Purchase</button>
    //     }


    // useEffect to display the products.  Product names are sorted in the fetch
    useEffect(
        () => {
            setFiltered(products)
        },
        [products]
    )

    // useEffect to display the search terms from the ProductContainer
    useEffect(
        () => {
            const searchedProducts = products.filter((product) => {
                return product.name.toLowerCase().startsWith(searchTermState.toLowerCase())
            })
            searchTermState ? setFiltered(searchedProducts) : setFiltered(products)
        },
        [searchTermState]
    )

    // jsx to display the products
    return <>
        <h2>Products</h2>

        <article className="products">
            {
                filteredProducts.map((product) => {
                    return <section className="product" key={product.id}>
                        <header>{product.name}</header>
                        <div>Price: {product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>

                        <button onClick={() => {
                            return fetch(`http://localhost:8088/purchases`, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    customerId: userId.id,
                                    productId: parseInt(product.id),
                                    amount: 1
                                })
                            })
                                .then(response => response.json())
                                .then(() => {
                                    getAllProducts()
                                })
                        }}>Purchase</button>
                    </section>
                })
            }
        </article>
    </>

}
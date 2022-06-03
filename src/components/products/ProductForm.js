import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./Products.css"

export const ProductForm = () => { 

    // assigning default properties to the initial state object, used zero for the default integers.
    const [product, update] = useState({
        name: "", 
        productTypeId: 0, 
        price: 0
    })

    

    // assigning useNavigate to a variable 
    const navigate = useNavigate()
    
    // defining a function to run the following instructions when the submit button is clicked.  Function has one parameter of event (the click event)
    const saveButtonClick = (event) => {
        event.preventDefault()

        // creating an object to save new product object to API when the button is clicked
        const productToAPI = {
            name: product.name,
            productTypeId: parseInt(product.productTypeId), 
            price: parseFloat(product.price)
        }

        // preforming fetch to POST the object to the API
        return fetch(`http://localhost:8088/products`, { 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(productToAPI)
        })
        .then(response => response.json())
        .then(() => {
            navigate("/products")
        })
    }

    // jsx for the new product form. Form has 3 inputs, product name, product type (integer), and price  (integer)

    return (
        <form className="productForm">
            <h2 className="productForm__title">New Product</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Product Name: </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Product Name"
                        value={product.name}
                        onChange={
                            (event) => {
                                const copy = {...product}
                                copy.name = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="typeId">Product Type: </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Please enter number value for product type"
                        value={product.productTypeId}
                        onChange={
                            (event) => {
                                const copy = {...product}
                                copy.productTypeId = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Product Price: </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Product Price per Item"
                        value={product.price}
                        onChange={
                            (event) => {
                                const copy = {...product}
                                copy.price = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            
            <button onClick={(clickEvent) => saveButtonClick(clickEvent)}
            className="btn btn-primary">
                Submit New Product
            </button>
        </form>
    )
}
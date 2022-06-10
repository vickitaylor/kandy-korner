import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getProductTypes, saveNewProduct } from "../ApiManager"

import "./Products.css"

export const ProductForm = () => {

    // assigning default properties to the initial state object, used zero for the default integers.
    const [product, update] = useState({
        name: "",
        productTypeId: "",
        price: ""
    })

    // state for product types 
    const [productTypes, setTypes] = useState([])

    // assigning useNavigate to a variable 
    const navigate = useNavigate()

    // useEffect to get the productTypes
    useEffect(
        () => {
            getProductTypes()
            .then((productTypeArr) => {
                    setTypes(productTypeArr)
                })
        },
        []
    )

    // defining a function to run the following instructions when the submit button is clicked.  Function has one parameter of event (the click event)
    const saveButtonClick = (event) => {
        event.preventDefault()

        // creating an object to save new product object to API when the button is clicked
        const productToAPI = {
            name: product.name,
            productTypeId: parseInt(product.productTypeId),
            price: parseFloat(product.price, 2)
        }

        // preforming fetch to POST the object to the API
        saveNewProduct(productToAPI)
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
                    <label className="product__heading" htmlFor="name">Product Name: </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Product Name"
                        value={product.name}
                        onChange={
                            (event) => {
                                const copy = { ...product }
                                copy.name = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="product__heading">Product Type:</div>
                {productTypes.map((type) => {
                    return (
                        <div className="product__form" key={`productType--${type.id}`}>
                            <input
                                required autoFocus
                                onChange={(changeEvent) => {
                                    const copy = { ...product };
                                    copy.productTypeId = parseInt(changeEvent.target.value);
                                    update(copy);
                                }}
                                type="radio"
                                name="productType"
                                value={type.id}
                            /> 
                                {type.type}
                            
                        </div>
                    )
                })}
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="product__heading" htmlFor="price">Product Price: </label>
                    <input
                        required autoFocus
                        type="number"
                        min="0.00" step="0.01"
                        className="form-control"
                        placeholder="Product Price per Item"
                        value={product.price}
                        onChange={
                            (event) => {
                                const copy = { ...product }
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
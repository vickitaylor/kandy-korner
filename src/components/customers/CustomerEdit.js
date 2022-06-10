import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// component that will allow an employee to edit the customer loyalty number

export const CustomerEdit = () => {
    const { customerId } = useParams()

    // state for the individual customer 
    const [customer, updateCustomer] = useState({
        userId: 0,
        loyaltyNumber: 0
    })

    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers/${customerId}`)
                .then(response => response.json())
                .then((data) => {
                    updateCustomer(data)
                })
        },
        [customerId]
    )

    const saveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/customers/${customerId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/customer")
            })
    }

    return (
        <form className="loyalty__form">
            <label>Loyalty Number:</label>
            <input
                required autoFocus
                type="number"
                min="10000" max="99999"
                className="form-control"
                placeholder="New Loyalty Number, enter 5 digits"
                value={customer.loyaltyNumber}
                onChange={
                    (event) => {
                        const copy = { ...customer }
                        copy.loyaltyNumber = parseInt(event.target.value)
                        updateCustomer(copy)
                    }}
            ></input>

            <button onClick={(clickEvent) => saveButtonClick(clickEvent)}
                className="btn btn-primary">
                Update</button>
        </form>
    )

}
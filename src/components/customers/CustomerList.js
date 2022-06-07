import { useState, useEffect } from "react"
import { Customers } from "./Customers"
import "./Customers.css"

export const CustomerList = () => {

    const [customers, setCustomers] = useState([])

    // fetching the customers and user data from API, observing initial state
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

    // passing thru the Customers component to display the current customers and assigned props

    return <>
        <h3>Customers</h3>
        <article className="customers"> 
            {
                customers.map((customer) => <Customers key={`customer--${customer.id}`}
                id={customer.id}
                name={customer?.user?.name}
                email={customer?.user?.email}            
                /> )
            }
        </article>
    </>

}
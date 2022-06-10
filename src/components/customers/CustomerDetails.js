import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

// component to display all of the customer information when linked is clicked

export const CustomerDetails = () => { 
    const {customerId} = useParams()
    const navigate= useNavigate()

    // state variable for the individual customer object
    const [ customer, updateCustomer ] = useState({})

    // useEffect to fetch the individual customer data with their customerId, observing customerId 
    useEffect(
        () => { 
            fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`)
            .then(response => response.json())
            .then((data) => { 
                const singleCustomer = data[0]
                updateCustomer(singleCustomer)
            })
        },
        [customerId]
    )

    return <section className="customer">
        <header className="customer__header">Name: {customer?.user?.name}</header>
        <div>Email: {customer?.user?.email}</div>
        <div>Loyalty Number: {customer.loyaltyNumber}</div>
        <button onClick={()=> navigate(`/customer/${customerId}/edit`)}>Update Loyalty Number</button>
    </section>
}



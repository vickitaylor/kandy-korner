import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOrders } from "../ApiManager"
import "./Products.css"

// component to show customer orders. 🦖🦖🦖currently showing all customers orders, having issues showing individual customer orders, will work on... 🦩🦩🦩
export const Orders = () => {
    const {customerId} = useParams()
    const [purchases, setPurchase] = useState([])

    // gets purchases from the API with the customer userId and products
    useEffect(
        () => {
            getOrders()
                .then((purchaseArray) => {
                    setPurchase(purchaseArray)
                })
        },
        []
    )


        

    return <>
        <h2>Orders</h2>

        <article className="purchase__list">
            {
                purchases.map((purchase) => {
                    return <section className="purchase" key={purchase.id}>
                        <header>{purchase?.product?.name}</header>
                        <div>Price: {purchase?.product?.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div><br />
                    </section>
                })
            }

        </article>
    </>
    
}







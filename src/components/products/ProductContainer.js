import { useState } from "react"
import { FindCandy } from "./FindCandy"
import { CustomerProductsList } from "./CustomerProductsList"


// parent container for FindCandy and ProductList, set props for the FindCandy component 
// new state variable to hold the searched terms

export const ProductContainer = () => { 
    const [ searchTerms, setSearchTerms ] = useState("")

    return <>
        <FindCandy setterFunction={setSearchTerms} />
        <CustomerProductsList searchTermState={searchTerms} />
    </>

}
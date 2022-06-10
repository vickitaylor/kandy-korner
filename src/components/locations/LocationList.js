import { useEffect, useState } from "react"
import { getLocations } from "../ApiManager"
import "./Locations.css"

export const LocationList = () => { 
    // creating a state variable for the locations
    const [locations, setLocations] = useState([])


    // useEffect is to fetch the locations from the API, once received storing it in an array, and then calling on setLocations to assign the array to the locations state
    useEffect(
        () => { 
            getLocations()
            .then((locationsArray) => { 
                setLocations(locationsArray)
            })
        },
        []
    )

    
    // jsx to display the locations 
    return <>
        <h2>List of Locations</h2>

        <article className="locations">
            {
                locations.map((location) => {
                    return <section className="location" key={location.id}>
                        <div>{location.address}</div>
                        <div>Store Square Footage: {location.sqft}</div><br/>
                    </section>
                })
            }
        </article>
    </>


}


import { useEffect, useState } from "react"
import "./Locations.css"

export const LocationList = () => { 
    // creating a state variable for the locations
    const [locations, setLocations] = useState([])


    // useEffect is to fetch the locations from the API, once received storing it in an array, and then calling on setLocations to assign the array to the locations state
    useEffect(
        () => { 
            fetch(`http://localhost:8088/locations`)
            .then(response => response.json())
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
                        <header>{location.address}</header>
                        <footer>Store Square Footage: {location.sqft}</footer><br/>
                    </section>
                })
            }
        </article>
    </>


}
// component has a key of setterFunction which is from the ProductContainer

export const FindCandy = ({setterFunction}) => { 
    return (
        <div>
            <input className="product__search" onChange={
                (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                }
            }
            type="text" placeholder="What candy are you looking for?" />
        </div>
    )
}

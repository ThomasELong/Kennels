import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import Animal from "./Animal"
import "./Animals.css"

export default () => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

    return (
        <>
        <h2 className="title">Animals</h2>
        <div className="animals">
            
        {
            animals.map(ani => {
            const owner = customers.find(cust => cust.id === ani.customerId)
            const clinic = locations.find(loc => loc.id === ani.locationId)

            return <Animal key={ani.id}
                location={clinic}
                customer={owner}
                animal={ani} />
        })
    }

        </div>
        </>
    )
}
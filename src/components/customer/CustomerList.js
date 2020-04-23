import React, { useContext } from "react"
import { CustomerContext } from "./CustomerProvider"
import Customer from "./Customer"
import "./Customer.css"

export default () => {
    const { customers } = useContext(CustomerContext)

    return (
        <>
        <h2 className="title">Customers</h2>
        <div className="customers ">
        {
            customers.map(cust => <Customer key={cust.id} customer={cust} />)
        }
        </div>
        </>
    )
}
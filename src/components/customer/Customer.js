import React from "react"

export default ({customer}) => (
    <section className="customer">
        <h3 className="customer__nameFirst">{customer.name}</h3>
        <address className="customer__nameLast">{customer.address}</address>
    </section>
)



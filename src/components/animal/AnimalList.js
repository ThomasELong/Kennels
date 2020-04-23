import React, { useContext, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap"
import Animal from "./Animal"
import "./Animals.css"
import AnimalForm from "./AnimalForm"

export default () => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)


    return (
        <>
        <div className="title animalHeader">
            <h2 className="title">Animals</h2>
            <Button onClick={() => {
                const userId = localStorage.getItem("kennel_customer")
                if(userId){
                    toggle()
                }
            }}>Make Appointment</Button>
        </div>
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
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                Admit an Animal
            </ModalHeader>
            <ModalBody>
                <AnimalForm toggler={toggle}/>
            </ModalBody>
        </Modal>
        </>
    )
}
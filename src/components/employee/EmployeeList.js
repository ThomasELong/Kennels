import React, { useContext, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import { LocationContext } from "../location/LocationProvider"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import EmployeeForm from "./EmployeeForm"
import "./Employee.css"

export default () => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <h2 className="title">Employees</h2>

            <div className="fakeLink href title" onClick={toggle}>New Employee</div>

            <ul className="employees">
                {
                    employees.map(emp => {
                        const loc = locations.find(l => l.id === emp.locationId)

                        return <Employee key={emp.id} location ={loc} employee={emp} />
                        
                    })
                }
            </ul>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    New Employee
                </ModalHeader>
                <ModalBody>
                    <EmployeeForm toggler={toggle} />>
                </ModalBody>
            </Modal>
        </>
    )
}
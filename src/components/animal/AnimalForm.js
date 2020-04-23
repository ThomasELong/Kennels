import React, { useContext, useRef } from "react"
import { AnimalContext } from "../animal/AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import "./Animals.css"

export default props => {
    const { locations } = useContext(LocationContext)
    const { addAnimal } = useContext(AnimalContext)

    const name = useRef()
    const location = useRef()
    const breed = useRef()

    const constructNewAnimal = () => {
        const locationId = parseInt(location.current.value)
        const userId = parseInt(localStorage.getItem("kennel_customer"))

        
        const newAnimal = {
                name: name.current.value,
                breed: breed.current.value,
                customerId: userId,
                locationId: locationId
            }
            addAnimal(newAnimal).then(props.toggler)
        }
        
        return (
            <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Name of Animal: </label>
                    <input
                        type="text"
                        id="animalName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Animal name"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalBreed">Breed: </label>
                    <input
                        type="text"
                        id="animalBreed"
                        ref={breed}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Breed"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        id="employeeLocation"
                        className="form-control"
                        >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewAnimal()
                    }
                }
                className="btn btn-primary">
                Admit Animal
            </button>
        </form>
    )
    
}
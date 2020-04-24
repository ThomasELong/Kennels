import React, { useState } from "react";
import "./Kennel.css";

import AnimalList from "./animal/AnimalList";
import { AnimalProvider } from "./animal/AnimalProvider";
import "./animal/Animals.css";

import LocationList from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider";
import "./location/Location.css";

import CustomerList from "./customer/CustomerList";
import { CustomerProvider } from "./customer/CustomerProvider";
import "./customer/Customer.css";

import EmployeeList from "./employee/EmployeeList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import "./employee/Employee.css";

import { SearchBar } from "./search/SearchBar";
import { SearchResults } from "./search/SearchResults"
import "./Layout.css"

export default () => {
  const [searchTerms, setTerms] = useState(null)

  return (
      <div className="mainContainer">
          <AnimalProvider>
              <CustomerProvider>
                  <EmployeeProvider>
                      <LocationProvider>
                          <div className="searchContainer">
                              <SearchBar setTerms={setTerms} />
                              <SearchResults searchTerms={searchTerms} />
                          </div>
                          <div className="dataContainer">
                              <h2>Nashville Kennels</h2>
                              <small>Loving care when you're not there.</small>
                              <LocationList />
                              <AnimalList />
                              <CustomerList />
                              <EmployeeList />
                          </div>
                      </LocationProvider>
                  </EmployeeProvider>
              </CustomerProvider>
          </AnimalProvider>
      </div>
  )
}
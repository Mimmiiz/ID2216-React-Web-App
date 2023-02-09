import React from 'react';
import Navbar from './Navbar';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './styles/Services.css'

import { Navigate } from 'react-router-dom';

/* Shows a list of all the services provided for a specific category, e.g., Salon */
function Services() {

    const location = useLocation();

    if (location.state == null) {
        console.log("Error: State is null, select one of the buttons on the main page");
        return <>{<Navigate to="/" />}</>;
    }

    const rows = [];
    for (let i = 0; i < location.state.subcategories.length; i++) {
        rows.push(
            <Link key={i} className='services-link' to="/service-persons" state = {{type: location.state.subcategories[i]}}>
                <button className="services-btn" >{location.state.subcategories[i]}</button>
            </Link>
        )
    }

    return (
        <div className="Services">
            {rows}
            <Navbar/>
        </div>
    )
}

export default Services;


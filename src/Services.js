import React from 'react';
import Navbar from './Navbar';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './styles/Services.css'

/* Shows a list of all the services provided for a specific category, e.g., Salon */
function Services() {

    const location = useLocation();
    console.log(location);
    console.log(location.state.subcategories[0]);

    // Idea: Go through the length of the 'subcategories' array in the for loop and add a button for each element. Send state to service-persons page
    const rows = [];
    for (let i = 0; i < 4; i++) {
        rows.push(
            <Link key={i} className='services-link' to="/service-persons">
            <button className="services-btn" >Link Button</button>
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


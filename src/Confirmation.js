import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Confirmation.css";

/* Confirmation page */
function Confirmation() {
    return (
        <div className='Confirmation'>
            <div className="confirmation-item confirmation-item-1"></div>
            <div className="confirmation-item confirmation-item-2">
                <object data="checkmark.png" width="142" height="142"></object>
            </div>
            <div className="confirmation-item confirmation-item-3">
                <h1>Order confirmed</h1>
            </div>
            <div className="confirmation-item confirmation-item-4">
                <Link className="homeButtonLink" to="/">
                    <button className="button-dark homeButton">Home</button>
                </Link>
            </div>
        </div>
    )
}

export default Confirmation;

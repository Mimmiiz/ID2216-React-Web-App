import React from 'react';
import { Link } from 'react-router-dom';

/* Confirmation page */
function Confirmation() {
    return (
        <div className='Confirmation'>
            <object data="checkmark.png" width="142" height="142"></object>
            <h1>Order confirmed</h1>
            <div><Link to="/">Home</Link></div>
        </div>
    )
}

export default Confirmation;

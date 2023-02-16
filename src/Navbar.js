import React from 'react';
import { Link } from 'react-router-dom';

/* Shows detailed information on the person providing the service, description, phone numbers etc. */
function Navbar() {
    return (
        <div className="Navbar">
            <Link to="/">Home</Link>
            {/*<a>History</a>
            <a>Settings</a>*/}
        </div>
    )
}

export default Navbar;


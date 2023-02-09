import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/ServicePersonDetails.css';

/* Shows detailed information on the person providing the service, description, phone numbers etc. */
function ServicePersonDetails() {

    const navigate = useNavigate();

    const serviceDetails = {name: "Joe Biden", service: "Men's haircut", price: 250.00, stars: 5.0, phoneNumber: "+46000000000"};
    
    const handleOnClick = () => navigate('/checkout', {state: serviceDetails});

    return (
        <div className="ServicePersonDetails">
            <div className="details-item details-item-1"></div>
            <div className="details-item details-item-2">
                <img className="profile-picture" src="profile.svg" alt="Profile picture"/>
            </div>
            <div className="details-item details-item-3">
                <div className="details-person-name">{serviceDetails.name}</div>
                <div className="details-person-stars">{serviceDetails.stars} *****</div>
                <div><button className="details-book-button" onClick={handleOnClick}>Book</button></div>
            </div>
            <div className="details-item details-item-4">Box</div>
            <div className="details-item details-item-5">Description... {serviceDetails.service} Price: {serviceDetails.price} SEK {serviceDetails.phoneNumber}</div>
        </div>
    )
}

export default ServicePersonDetails;
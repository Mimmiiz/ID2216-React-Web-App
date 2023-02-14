import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/ServicePersonDetails.css';
import DatePicker from './DatePicker';

/* Shows detailed information on the person providing the service, description, phone numbers etc. */
function ServicePersonDetails() {

    const navigate = useNavigate();

    const serviceDetails = {name: "Joe Biden", service: "Men's haircut", price: 250.00, stars: 3.1, phoneNumber: "+46000000000"};
    
    const handleOnClick = () => navigate('/checkout', {state: serviceDetails});

    const [bookedDateTime, setBookedDateTime] = React.useState(null);

    function getSelectedDateTime(dateTime) { 
        setBookedDateTime(dateTime);  
     }


    /* Adds the stars that will be showed on the page */
    const stars = [];
    
    var starsRounded = Math.round(serviceDetails.stars * 10) / 10;
    var x = starsRounded * 10;
    for(let i = 0; i < 5; i++) {
        x = x - 10;
        if (x < -7) {
            stars.push(
                <object key={"star-" + i} className="star-rating" data="no-star.svg"></object>
            )
        }
        else if (x < -2) {
            stars.push(
                <object key={"star-" + i} className="star-rating" data="half-star.svg"></object>
            )
        }
        else {
        stars.push(
            <object key={"star-" + i} className="star-rating" data="star.svg"></object>
        )
        }
    }

    return (
        <div className="ServicePersonDetails">
            <div className="details-item details-item-1"></div>
            <div className="details-item details-item-2">
                <img className="profile-picture" src="avatar.svg" alt="Profile picture"/>
            </div>
            <div className="details-item details-item-3">
                <div className="details-person-name">{serviceDetails.name}</div>
                <div className="details-person-stars">{starsRounded} {stars}</div>
                <div>
                    <button className="button-dark details-book-button" onClick={handleOnClick}>Book</button>
                </div>
            </div>
            <div className="box-light details-item details-item-4"><DatePicker getSelectedDateTime={getSelectedDateTime}/></div>
            <div className="details-item details-item-5"> Selected time: {bookedDateTime} {serviceDetails.service} Price: {serviceDetails.price} SEK {serviceDetails.phoneNumber}</div>
            <div className="footer"></div>
        </div>
    )
}

export default ServicePersonDetails;
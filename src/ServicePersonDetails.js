import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/ServicePersonDetails.css';
import DatePicker from './DatePicker';

/* Shows detailed information on the person providing the service, description, phone numbers etc. */
function ServicePersonDetails() {

    const navigate = useNavigate();

    var serviceDetails = {name: "Joe Biden", service: "Men's haircut", 
    description: "Includes hair wash and simple styling. Please note that the price may increase if more products or time is needed.", 
    price: 250.00, stars: 3.1, phoneNumber: "+46000000000", bookedDate: null, bookedTime: null};
    
    const handleOnClick = () => {
        serviceDetails.bookedDate = bookedDate;
        serviceDetails.bookedTime = bookedTime;
        navigate('/checkout', {state: {serviceDetails}});
    }

    const [bookedDate, setBookedDate] = React.useState(null);
    const [bookedTime, setBookedTime] = React.useState(null);

    function getSelectedDateTime(selectedDate, selectedTime) { 
        setBookedDate(selectedDate);
        setBookedTime(selectedTime); 
     }


    /* Adds the stars that will be showed on the page */
    const stars = [];
    
    var starsRounded = Math.round(serviceDetails.stars * 10) / 10;
    var x = starsRounded * 10;
    for(let i = 0; i < 5; i++) {
        x = x - 10;
        if (x < -7) {
            stars.push(
                <img key={"star-" + i} className="star-rating" src="no-star.svg" alt={"no-star" + i}></img>
            )
        }
        else if (x < -2) {
            stars.push(
                <img key={"star-" + i} className="star-rating" src="half-star.svg" alt={"half-star" + i}></img>
            )
        }
        else {
        stars.push(
            <img key={"star-" + i} className="star-rating" src="star.svg" alt={"star" + i}></img>
        )
        }
    }

    return (
        <div className="ServicePersonDetails">
            <div className="details-item details-item-1"></div>
            <div className="details-item details-item-2">
                <img className="profile-picture" src="avatar.svg" alt="Avatar"/>
            </div>
            <div className="details-item details-item-3">
                <div className="details-person-name">{serviceDetails.name}</div>
                <div className="details-person-stars">{starsRounded} {stars}</div>
                <div>
                    <button className="button-dark details-book-button" onClick={handleOnClick} disabled={bookedDate === null && bookedTime === null} >Book</button>
                </div>
            </div>
            <div className="box-light details-item details-item-4">{<DatePicker getSelectedDateTime={getSelectedDateTime}/>}</div>
            <div className="details-item details-item-5"> 
                <h4>{serviceDetails.service}</h4> 
                <p>Price: {serviceDetails.price} SEK </p> 
                <p>{serviceDetails.description}</p>
                <p>Phone number: {serviceDetails.phoneNumber}</p>
            </div>
            <div className="footer"></div>
        </div>
    )
}

export default ServicePersonDetails;
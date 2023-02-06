import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

/* The checkout page that shows the order details etc.*/
function CheckoutView({firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber, address, setAddress, postalCode, setPostalCode, city, setCity, handleOnClick}) {
    return (
        <div className="Checkout"> 
            <div className="backArrowBox">
                <object className="backArrow" data="arrow.svg" width="27" height="27"> </object>
            </div>
            <div className="item item-1"><h1>Checkout</h1></div>  
            <div className="item item-2">
                <div className="serviceDescription">
                    <p>This is the service description</p>
                </div>
            </div>
            <div className="item item-3">
                <label className="firstNameLabel" htmlFor="firstName">First name</label>
                <input
                    className="firstNameInput" 
                    type="firstName" 
                    id="firstName" 
                    value={firstName}
                    placeholder="First name" 
                    onChange = {(event) => setFirstName(event.target.value)}>
                </input>
            </div>
            <div className="item item-4">
                <label className="lastNameLabel" htmlFor="lastName">Last name</label>
                <input
                    className="lastNameInput" 
                    type="lastName" 
                    id="lastName" 
                    value={lastName}
                    placeholder="Last name" 
                    onChange = {(event) => setLastName(event.target.value)}>
                </input>
            </div>

            <div className="item item-5">
                <label className="addressLabel" htmlFor="address">Address</label>
                <input
                    className="addressInput" 
                    type="address" 
                    id="address" 
                    value={address}
                    placeholder="Address" 
                    onChange = {(event) => setAddress(event.target.value)}>
                </input>
            </div>
            <div className="item item-6">
                <label className="postalCodeLabel" htmlFor="postalCode">Postal code</label>
                <input
                    className="postalCodeInput" 
                    type="postalCode" 
                    id="postalCode" 
                    value={postalCode}
                    placeholder="Postal code" 
                    onChange = {(event) => setPostalCode(event.target.value)}>
                </input>
            </div>
            <div className="item item-7">
                <label className="cityLabel" htmlFor="city">City</label>
                <input
                    className="cityInput" 
                    type="city" 
                    id="city" 
                    value={city}
                    placeholder="City" 
                    onChange = {(event) => setCity(event.target.value)}>
                </input>
            </div>
            <div className='item item-8'>
                <label className="emailLabel" htmlFor="email">Email</label>
                <input
                    className="emailInput" 
                    type="email" 
                    id="email" 
                    value={email}
                    placeholder="Email address" 
                    onChange = {(event) => setEmail(event.target.value)}>
                </input>
            </div>
            <div className="item item-9">
                <label className="phoneNumberLabel" htmlFor="phoneNumber">Phone number</label>
                <input
                    className="phoneNumberInput" 
                    type="phoneNumber" 
                    id="phoneNumber" 
                    value={phoneNumber}
                    placeholder="Phone number" 
                    onChange = {(event) => setPhoneNumber(event.target.value)}>
                </input>
            </div>
            <div className="item item-10">
                <button 
                    className="confirmButton" 
                    onClick={handleOnClick}>
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default CheckoutView;
import React from 'react';
import Navbar from './Navbar';

/* The checkout page that shows the order details etc.*/
function Checkout({firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber, address, setAddress, postalCode, setPostalCode, city, setCity}) {
    return (
        <div className="Checkout">   
            <h1>Checkout</h1>
            <div className="serviceDescription">
                <p>This is the service description</p>
            </div>
            <div className="form-row">
            <div className="nameBox">
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
            <div className="box-separator"></div>
            <div className="nameBox">
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
            </div>

            <label className="addressLabel" htmlFor="address">Address</label>
            <input
                className="addressInput" 
                type="address" 
                id="address" 
                value={address}
                placeholder="Address" 
                onChange = {(event) => setAddress(event.target.value)}>
            </input>

            <label className="postalCodeLabel" htmlFor="postalCode">Postal code</label>
            <input
                className="postalCodeInput" 
                type="postalCode" 
                id="postalCode" 
                value={postalCode}
                placeholder="PostalCode" 
                onChange = {(event) => setPostalCode(event.target.value)}>
            </input>

            <label className="cityLabel" htmlFor="city">City</label>
            <input
                className="cityInput" 
                type="city" 
                id="city" 
                value={city}
                placeholder="City" 
                onChange = {(event) => setCity(event.target.value)}>
            </input>

            <label className="emailLabel" htmlFor="email">Email</label>
            <input
                className="emailInput" 
                type="email" 
                id="email" 
                value={email}
                placeholder="Email address" 
                onChange = {(event) => setEmail(event.target.value)}>
            </input>

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
    )
}

export default Checkout;
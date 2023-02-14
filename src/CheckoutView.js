import React from 'react';
import { Navigate } from 'react-router-dom';

/* The checkout page that shows the order details etc.*/
function CheckoutView({serviceDescription, firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber, address, setAddress, postalCode, setPostalCode, city, setCity, handleOnClick}) {
    
    if (serviceDescription == null) {
        console.log("Error: State is null, select one of the buttons on the main page");
        return <>{<Navigate to="/" />}</>;
    }

    return (
        <div className="Checkout"> 
            <div className="checkout-item checkout-item-1"><h1>Checkout</h1></div>  
            <div className="checkout-item checkout-item-2">
                <div className="box-light serviceDescription">
                    <div className="serviceDescription-item serviceDescription-item-1"><h3>Service Description</h3>{serviceDescription.service}</div>
                    <div className="serviceDescription-item serviceDescription-item-2"><h3>Person providing the service</h3>{serviceDescription.name}</div>
                    <div className="serviceDescription-item serviceDescription-item-3"><h3>Contact information</h3>{serviceDescription.phoneNumber}</div>
                    <div className="serviceDescription-item checkoutTotal">Total:</div>
                    <div className="serviceDescription-item checkoutCost">{serviceDescription.price} SEK</div>
                </div>
            </div>
            <div className="checkout-item checkout-item-3"><h3>Contact and Address Information</h3></div>
            <div className="checkout-item checkout-item-4">
                <label className="firstNameLabel" htmlFor="firstName">First name</label>
                <input
                    className="box-light firstNameInput" 
                    type="firstName" 
                    id="firstName" 
                    value={firstName}
                    placeholder="First name" 
                    onChange = {(event) => setFirstName(event.target.value)}>
                </input>
            </div>
            <div className="checkout-item checkout-item-5">
                <label className="lastNameLabel" htmlFor="lastName">Last name</label>
                <input
                    className="box-light lastNameInput" 
                    type="lastName" 
                    id="lastName" 
                    value={lastName}
                    placeholder="Last name" 
                    onChange = {(event) => setLastName(event.target.value)}>
                </input>
            </div>

            <div className="checkout-item checkout-item-6">
                <label className="addressLabel" htmlFor="address">Address</label>
                <input
                    className="box-light addressInput" 
                    type="address" 
                    id="address" 
                    value={address}
                    placeholder="Address" 
                    onChange = {(event) => setAddress(event.target.value)}>
                </input>
            </div>
            <div className="checkout-item checkout-item-7">
                <label className="postalCodeLabel" htmlFor="postalCode">Postal code</label>
                <input
                    className="box-light postalCodeInput" 
                    type="postalCode" 
                    id="postalCode" 
                    value={postalCode}
                    placeholder="Postal code" 
                    onChange = {(event) => setPostalCode(event.target.value)}>
                </input>
            </div>
            <div className="checkout-item checkout-item-8">
                <label className="cityLabel" htmlFor="city">City</label>
                <input
                    className="box-light cityInput" 
                    type="city" 
                    id="city" 
                    value={city}
                    placeholder="City" 
                    onChange = {(event) => setCity(event.target.value)}>
                </input>
            </div>
            <div className='checkout-item checkout-item-9'>
                <label className="emailLabel" htmlFor="email">Email</label>
                <input
                    className="box-light emailInput" 
                    type="email" 
                    id="email" 
                    value={email}
                    placeholder="Email address" 
                    onChange = {(event) => setEmail(event.target.value)}>
                </input>
            </div>
            <div className="checkout-item checkout-item-10">
                <label className="phoneNumberLabel" htmlFor="phoneNumber">Phone number</label>
                <input
                    className="box-light phoneNumberInput" 
                    type="phoneNumber" 
                    id="phoneNumber" 
                    value={phoneNumber}
                    placeholder="Phone number" 
                    onChange = {(event) => setPhoneNumber(event.target.value)}>
                </input>
            </div>
            <div className="checkout-item checkout-item-11">
                <button 
                    className="button-dark confirmButton" 
                    onClick={handleOnClick}>
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default CheckoutView;
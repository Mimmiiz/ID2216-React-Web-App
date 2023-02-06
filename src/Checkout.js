import { useState, createElement, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutView from './CheckoutView';

const Checkout = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const navigate = useNavigate();

    const handleOnClick = useCallback(() => navigate('/confirmation', {replace: true}), [navigate]);

    console.log(firstName);

    return createElement(CheckoutView, {
        firstName: firstName,
        lastName: lastName,
        address: address,
        postalCode: postalCode,
        city: city,
        email: email,
        phoneNumber:phoneNumber,
        setFirstName: firstName => setFirstName(firstName),
        setLastName: lastName => setLastName(lastName),
        setAddress: address => setAddress(address),
        setPostalCode: postalCode => setPostalCode(postalCode),
        setCity: city => setCity(city),
        setEmail: email => setEmail(email),
        setPhoneNumber: phoneNumber => setPhoneNumber(phoneNumber),
        handleOnClick: handleOnClick,
    })
}

export default Checkout;
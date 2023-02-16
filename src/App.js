import React from 'react';
import './App.css';
import Confirmation from './Confirmation';
import Services from './Services';
import ServicePersonList from './ServicePersonList';
import ServicePersonDetails from './ServicePersonDetails';
import {Routes, Route} from 'react-router-dom';
import Checkout from './Checkout';
import BackArrow from './BackArrow';
import Navbar from './Navbar';
import SearchBar from "./components/SearchBar";
import PostYourBusiness from "./components/PostYourBusiness";
import OrderConfirmation from './components/OrderConfirmation';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route exact path='/services' element={<React.Fragment><BackArrow linkTo={"/"}/><Services/></React.Fragment>} />
        <Route exact path='/service-persons' element={<React.Fragment><BackArrow linkTo={"/services"}/><ServicePersonList/></React.Fragment>} />
        <Route exact path='/service-persons-details' element={<React.Fragment><BackArrow linkTo={"/service-persons"}/><ServicePersonDetails/><Navbar/></React.Fragment>} />
        <Route exact path='/checkout' element={<React.Fragment><BackArrow linkTo={"/service-persons-details"}/><Checkout/></React.Fragment>} />
        <Route exact path='/confirmation' element={<Confirmation/>} />
        <Route path="/PostYourBusiness" element={<React.Fragment><BackArrow linkTo={"/"}/><PostYourBusiness/></React.Fragment>} />
        <Route path="/PostYourBusiness/OrderConfirmation" element={<OrderConfirmation />} /> 
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Home from './Home';
import Confirmation from './Confirmation';
import Services from './Services';
import ServicePersonList from './ServicePersonList';
import ServicePersonDetails from './ServicePersonDetails';
import {Routes, Route} from 'react-router-dom';
import Checkout from './Checkout';
import BackArrow from './BackArrow';
import SearchBar from "./components/SearchBar";
import PostYourBusiness from "./components/PostYourBusiness";
import OrderConfirmation from './components/OrderConfirmation';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route exact path='/services' element={<Services/>} />
        <Route exact path='/service-persons' element={<ServicePersonList/>} />
        <Route exact path='/service-persons-details' element={<React.Fragment><BackArrow linkTo={"/service-persons"}/><ServicePersonDetails/></React.Fragment>} />
        <Route exact path='/checkout' element={<React.Fragment><BackArrow linkTo={"/service-persons-details"}/><Checkout/></React.Fragment>} />
        <Route exact path='/confirmation' element={<Confirmation/>} />
        <Route path="/PostYourBusiness" element={<PostYourBusiness />} />
        <Route path="/PostYourBusiness/OrderConfirmation" element={<OrderConfirmation />} /> 
      </Routes>
    </div>
  );
}

export default App;

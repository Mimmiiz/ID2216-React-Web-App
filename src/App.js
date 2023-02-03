import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Home';
import Checkout from './Checkout';
import Confirmation from './Confirmation';
import Services from './Services';
import ServicePersonList from './ServicePersonList';
import ServicePersonDetails from './ServicePersonDetails';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/services' element={<Services/>} />
        <Route exact path='/service-persons' element={<ServicePersonList/>} />
        <Route exact path='/service-persons-details' element={<ServicePersonDetails/>} />
        <Route exact path='/checkout' element={<Checkout/>} />
        <Route exact path='/confirmation' element={<Confirmation/>} />
      </Routes>
    </div>
  );
}

export default App;

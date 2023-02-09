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
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
function Form() {
  // const navigate = useNavigate();
  return <button type="button" onClick={()=>useNavigate('/service-persons')}>Click</button>
}
// function handleClick(event) {
//     navigate('/service-persons');
//   }
function App() {
  const loggedIn = false; 
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
      
      
      {/* <Navigate to="/service-persons" replace={true}/> */}
    </div>
    
  );
}

export default App;

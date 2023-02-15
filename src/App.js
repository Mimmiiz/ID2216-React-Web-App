import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchBar from "./components/SearchBar";
import PostYourBusiness from "./components/PostYourBusiness";
import OrderConfirmation from './components/OrderConfirmation';

function App() {
  return (
    <Routes>
       <Route path="/" element={<SearchBar />} />
       <Route path="/PostYourBusiness" element={<PostYourBusiness />} />
      <Route path="/PostYourBusiness/OrderConfirmation" element={<OrderConfirmation />} /> 
    </Routes>

  );
}

export default App;

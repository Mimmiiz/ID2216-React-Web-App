import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchBar from "./components/SearchBar";
import PostYourBusiness from "./components/PostYourBusiness";
import BookingScreen from "./components/BookingScreen";

function App() {
  return (
    <Routes>
       <Route path="/" element={<SearchBar />} />
       <Route path="/PostYourBusiness" element={<PostYourBusiness />} />
       <Route path="/BookingScreen" element={<BookingScreen />} />
    </Routes>

 //   <div className="App">
 //      <SearchBar/>
 //<button onClick={() => navigate('PostYourBusiness')}>PostYourBusiness</button>
 //   </div>
 //<TouchableOpacity style={styles.buttonText}>
 //     <Text style={styles.labelService}>Post your business</Text>
 //    </TouchableOpacity>
  );
}

export default App;

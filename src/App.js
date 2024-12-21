import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login'; // ADDED: Import the Login component
import SignUp from './Components/Sign_Up/Sign_Up'; // ADDED: Import the Sign_Up component

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/login" element={<Login />} /> {/* ADDED: Route for the Login page */}
          <Route path="/signup" element={<SignUp />} /> {/* ADDED: Route for the Sign Up page */}
          {/* Add routes for other components (e.g., Appointments) here in the future */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page'; // Corrected import statement
// Import other components (Login, Sign_Up, etc.) as needed

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing_Page />} /> {/* Route for the home page */}
          {/* Add other routes here. For example:
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
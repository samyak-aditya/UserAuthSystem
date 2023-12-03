import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import BMICalculation from './bmi.js';

function App() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/bmi" element={<BMICalculation/>} />
    </Routes>
  );
}

export default App;

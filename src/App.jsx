import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WindSpeedPrediction from './components/WindSpeedPrediction';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forecast" element={<WindSpeedPrediction />} />
      </Routes>
    </Router>
  );
};

export default App;

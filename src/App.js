import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CandidateDashboard from './components/CandidateDashboard';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CandidateDashboard />} />
        <Route path="/postuler" element={<ApplicationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
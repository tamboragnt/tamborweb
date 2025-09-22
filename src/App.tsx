import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LegalPage from './pages/LegalPage';
import WeeklyInsightsPage from './pages/WeeklyInsightsPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/weekly-insights" element={<WeeklyInsightsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import DeveloperPage from './pages/DeveloperPage';

function NavigationWrapper() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route 
        path="/" 
        element={<PortfolioPage onEnterDevMode={() => navigate('/developer')} />} 
      />
      <Route 
        path="/developer" 
        element={<DeveloperPage onBackToPortfolio={() => navigate('/')} />} 
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavigationWrapper />
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from 'react';
import PortfolioPage from './pages/PortfolioPage';
import DeveloperPage from './pages/DeveloperPage';

function App() {
  const [page, setPage] = useState('portfolio');

  return (
    <>
      {page === 'portfolio' ? (
        <PortfolioPage onEnterDevMode={() => setPage('developer')} />
      ) : (
        <DeveloperPage onBackToPortfolio={() => setPage('portfolio')} />
      )}
    </>
  );
}

export default App;

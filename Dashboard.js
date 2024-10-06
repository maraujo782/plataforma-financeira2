import React, { useState, useEffect } from 'react';
import AssetChart from './AssetChart';

const Dashboard = () => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/stock/AAPL')  // Ajuste para o endpoint do backend
      .then(response => response.json())
      .then(data => setStockData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Stock Dashboard</h2>
      {stockData ? <AssetChart data={stockData} /> : <p>Loading data...</p>}
    </div>
  );
};

export default Dashboard;

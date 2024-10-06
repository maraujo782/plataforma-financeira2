import React, { useState, useEffect } from 'react';

const AIRecommendations = () => {
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/predict/AAPL')  // Ajuste para o endpoint do backend
      .then(response => response.json())
      .then(data => setPrediction(data.prediction))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>AI Recommendations</h2>
      {prediction ? <p>Buy/Sell prediction: {prediction}</p> : <p>Loading prediction...</p>}
    </div>
  );
};

export default AIRecommendations;

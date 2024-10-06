import React from "react";
import Dashboard from "./components/Dashboard";
import AIRecommendations from "./components/AIRecommendations";
import Notifications from "./components/Notifications";

function App() {
  return (
    <div className="App">
      <h1>Financial AI Platform</h1>
      <Dashboard />
      <AIRecommendations />
      <Notifications />
    </div>
  );
}

export default App;

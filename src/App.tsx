import React from 'react';
import './App.css';
import Cards from './components/Cards';
import CardGrid from './components/CardsGrid';
function App() {
  const docs = [1 ,2, 4, 4, 5, 6,6,7,7,7]
  return (
    <div className="App">
      <CardGrid />
    </div>
  );
}

export default App;

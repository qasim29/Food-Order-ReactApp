import React from 'react'
import NavBar from "./src/components/Layout/NavBar"
import Meals from './src/components/Meals/meals';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Meals></Meals>
    </div>
  );
}

export default App;

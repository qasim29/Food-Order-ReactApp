import React from 'react'
import NavBar from "./components/Layout/NavBar"
import Meals from './components/Meals/meals';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Meals></Meals>
    </div>
  );
}

export default App;

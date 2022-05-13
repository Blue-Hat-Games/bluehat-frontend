import './App.css';
import Navbar from './components/Navbar';
import ExploreMain from './components/Explore';
import Login from './components/Login';
import Button from './components/button';
import React from "react"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div>
        <ExploreMain />
        </div>
        <Login />
        <Button/>
      </header>
    </div>
  );
}

export default App;

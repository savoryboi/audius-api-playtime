import './App.css';
import React from 'react';
import Header from './components/Header';
import {TopTen} from './components/TopTen';

function App() {
  return (
    <div className="App">
      <Header />
      <TopTen />
    </div>
  );
}

export default App;

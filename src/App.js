import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return <div className="App">
    <div className="container">

    <Weather defaultCity="Toronto" />

    <footer className="mb-3">
      <a href="https://github.com/multipotentialite-aj/react-weather-app" target="_blank" rel="noreferrer">Coded by AJ on GitHub</a>
      </footer>
  </div>
  </div>
}
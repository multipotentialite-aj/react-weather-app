import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit"><a href="/" onClick={showFahrenheit}>°C</a>{" "} | °F</span>
    </div>
  );
} else {
  let fahrenheit = (props.celcius * 9) / 5 + 32;
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(fahrenheit)}</span>
      <span className="unit"><a href="/" onClick={showFahrenheit}>°C</a>{" "} | °F</span>
    </div>
  );
}
}
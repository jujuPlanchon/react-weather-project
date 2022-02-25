import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Application</h1>
        <Weather />
        <footer>
          Coded by{" "}
          <a
            href="https://adoring-snyder-02ab2d.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Julia Planchon
          </a>{" "}
          and it's open source at{" "}
          <a
            href="https://github.com/jujuPlanchon/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            Julia's Github
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;

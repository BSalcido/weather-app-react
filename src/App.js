import "./App.css";
import "./Weather";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/brisa-salcido-0ba125186"
          target={"_blank"}
        >
          Brisa Salcido
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/BSalcido/weather-app-react"
          target={"_blank"}
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="https://keen-panini-39e807.netlify.app" target={"_blank"}>
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/CodeLeez"
            rel="noreferrer"
            target="_blank"
          >
            Elizabeth Chigudu
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/CodeLeez/reactweatherproject "
            rel="noreferrer"
            target="_blank"
          >
            open-sourced onGitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

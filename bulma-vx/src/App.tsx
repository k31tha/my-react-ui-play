import React from "react";
import logo from "./logo.svg";
import "bulma/css/bulma.min.css";

function App() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="main">
            <div className="buttons">
              <button className="button is-primary is-small">Primary</button>
              <button className="button is-link is-outlined">Link</button>
              <button className="button is-info disabled">Info</button>
              <button className="button is-success is-loading">Success</button>
              <button className="button is-warning">Warning</button>
              <button className="button is-danger">Danger</button>
              <button className="button is-black">Black</button>
              <button className="button is-white">White</button>
              <button className="button is-dark">Dark</button>
              <button className="button is-light">Light</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

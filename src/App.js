import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="heading-div">
        <h1 className="heading-text"> Best Movies</h1>
      </div>

      <ul className="btn-section">
        <li className="btn-list-section">
          <span class="section-titles-name download-btn skill-btn ">
            Hollywood
          </span>
        </li>

        <li className="btn-list-section">
          <span class="section-titles-name download-btn skill-btn ">
            Bollywood
          </span>
        </li>
        <li className="btn-list-section">
          <span class="section-titles-name download-btn skill-btn ">
            Pollywood
          </span>
        </li>
        {/* <li className="btn-list-section">
          <span class="section-titles-name download-btn skill-btn ">Tollywood</span>
        </li> */}
      </ul>

      <hr className="breaking-line" />
    </div>
  );
}

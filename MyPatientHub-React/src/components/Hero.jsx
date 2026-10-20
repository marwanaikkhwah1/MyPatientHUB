import { useState } from "react";
import GlobalSearch from "./GlobalSearch";

import "./Hero.css";
function Hero({ onLoginClick, onMenuClick, onSettings, navigation, onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [area, setArea] = useState("");
  function submit(event) { event.preventDefault(); onSearch?.(keyword, area); }
  return (
    <section className="hero">

      <div className="hero-topbar">

        <div className="hero-logo">
          <div>⌂ &nbsp;/&nbsp; Findhospital</div>
          <strong>Findhospital</strong>
        </div>

        <button type="button" className="hero-menu" onClick={onMenuClick} aria-label="Open navigation">☰</button>

        <div className="hero-actions">

          <div className="top-search"><GlobalSearch navigation={navigation} /></div>

       <span onClick={onLoginClick} style={{ cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={(event) => { if (event.key === "Enter") onLoginClick?.(); }}>◉ Log in</span>
          <button type="button" className="top-icon" onClick={onSettings} aria-label="Settings">⚙</button>
          <span className="top-icon">●</span>

        </div>

      </div>

      <div className="hero-content">

        <h1>Find a Clinic</h1>

        <p>
          Search Clinics and schedule an appointment with doctors through Clinic
        </p>

        <form className="search-boxes" onSubmit={submit}>

          <input
            type="text"
            placeholder="Search clinics" value={keyword} onChange={(event) => setKeyword(event.target.value)}
          />

          <input
            type="text"
            placeholder="Area or neighborhood" value={area} onChange={(event) => setArea(event.target.value)}
          />

          <button type="button" onClick={() => {setArea("");onSearch?.(keyword, "");}}>Any Area</button>

          <button type="submit">Search</button>

        </form>

      </div>

    </section>
  );
}

export default Hero;

import "./Hero.css";
function Hero({ onLoginClick, onMenuClick }) {
  return (
    <section className="hero">

      <div className="hero-topbar">

        <div className="hero-logo">
          <div>⌂ &nbsp;/&nbsp; Findhospital</div>
          <strong>Findhospital</strong>
        </div>

        <button type="button" className="hero-menu" onClick={onMenuClick} aria-label="Open navigation">☰</button>

        <div className="hero-actions">

          <div className="top-search">
            🔍
            <input
              type="text"
              placeholder="Type here..."
            />
          </div>

       <span onClick={onLoginClick} style={{ cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={(event) => { if (event.key === "Enter") onLoginClick?.(); }}>◉ Log in</span>
          <span className="top-icon">⚙</span>
          <span className="top-icon">●</span>

        </div>

      </div>

      <div className="hero-content">

        <h1>Find a Clinic</h1>

        <p>
          Search Clinics and schedule an appointment with doctors through Clinic
        </p>

        <div className="search-boxes">

          <input
            type="text"
            placeholder="Search"
          />

          <input
            type="text"
            placeholder="Zip Code or Neighborhood"
          />

          <button>Current</button>

          <button>Search</button>

        </div>

      </div>

    </section>
  );
}

export default Hero;
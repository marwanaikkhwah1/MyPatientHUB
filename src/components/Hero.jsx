
import "./Hero.css";
function Hero() {
  return (
    <section className="hero">

      <div className="hero-topbar">

        <div className="hero-logo">
          <div>⌂ &nbsp;/&nbsp; Findhospital</div>
          <strong>Findhospital</strong>
        </div>

        <div className="hero-menu">☰</div>

        <div className="hero-actions">

          <div className="top-search">
            🔍
            <input
              type="text"
              placeholder="Type here..."
            />
          </div>

       <span
  onClick={() => {
    window.location.href = "/login";
  }}
  style={{ cursor: "pointer" }}
>
  ◉ Log in
</span>
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
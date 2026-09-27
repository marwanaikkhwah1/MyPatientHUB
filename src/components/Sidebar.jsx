import "./sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <img src="/images/logo.png" alt="MyPatientHUB Logo" />
        <span>MyPatientHUB</span>
      </div>

      {/* Menu */}
      <nav className="sidebar-menu">

        <a href="#">
          <span className="icon">⌂</span>
          <span>Dashboard</span>
        </a>

        <a href="#">
          <span className="icon">▣</span>
          <span>Appointments</span>
        </a>

        <a href="#">
          <span className="icon">♙</span>
          <span>Find Doctor</span>
        </a>

        <a href="#" className="active">
          <span className="icon">▣</span>
          <span>Find Clinic</span>
        </a>

        <a href="#">
          <span className="icon">▣</span>
          <span>Chat</span>
        </a>

        <a href="#">
          <span className="icon">▤</span>
          <span>Find MarketPlace</span>
        </a>

        <a href="#">
          <span className="icon">🚀</span>
          <span>Find Pharmacy</span>
        </a>

        <a href="#">
          <span className="icon">▣</span>
          <span>My Dependents</span>
        </a>

        <a href="#">
          <span className="icon">⚒️</span>
          <span>My Account</span>
        </a>

        <a href="#">
          <span className="icon">⚙️</span>
          <span>Settings</span>
        </a>

      </nav>

      {/* Bottom App Card */}
      <div className="app-card">

        <div className="question-icon">?</div>

        <h3>
          Download<br />
          MyPIHUB Mobile App
        </h3>

        <div className="app-buttons">
          <button></button>
          <button>▶️</button>
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;
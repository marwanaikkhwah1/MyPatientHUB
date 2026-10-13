
function Sidebar({
  isCollapsed,
  isMobileOpen,
  onClose,
  activePage,
  goToDashboard,
  goToFindDoctor,
  goToFindClinic,
  goToMarketplace,
  goToMyDependents,
}) {
  function openPage(event, navigate) {
    event.preventDefault();

    if (navigate) {
      navigate();
    }

    if (onClose) {
      onClose();
    }
  }

  return (
    <aside
      className={`sidebar
        ${isCollapsed ? "collapsed" : ""}
        ${isMobileOpen ? "mobile-open" : ""}
      `}
    >
      <button
        className="sidebar-close"
        onClick={onClose}
      >
        x
      </button>

      <div className="logo">
        <span className="logo-mark">M</span>
        <span>MyPatientHUB</span>
      </div>

      <nav className="nav">
        <a
          href="#"
          className={
            activePage === "dashboard"
              ? "link active"
              : "link"
          }
          onClick={(event) =>
            openPage(event, goToDashboard)
          }
        >
          <span className="nav-icon">▣</span>
          <span>Dashboard</span>
        </a>

        <a
          href="#"
          className="link"
          onClick={(event) => event.preventDefault()}
        >
          <span className="nav-icon">▤</span>
          <span>Appointments</span>
        </a>

        <a
          href="#"
          className={
            activePage === "doctor"
              ? "link active"
              : "link"
          }
          onClick={(event) =>
            openPage(event, goToFindDoctor)
          }
        >
          <span className="nav-icon">♙</span>
          <span>Find Doctor</span>
        </a>

        <a
          href="#"
          className={
            activePage === "clinic"
              ? "link active"
              : "link"
          }
          onClick={(event) =>
            openPage(event, goToFindClinic)
          }
        >
          <span className="nav-icon">▣</span>
          <span>Find Clinic</span>
        </a>

        <a
          href="#"
          className="link"
          onClick={(event) => event.preventDefault()}
        >
          <span className="nav-icon">▤</span>
          <span>Chat</span>
        </a>

        <a
          href="#"
          className={
            activePage === "marketplace"
              ? "link active"
              : "link"
          }
          onClick={(event) =>
            openPage(event, goToMarketplace)
          }
        >
          <span className="nav-icon">▦</span>
          <span>Find Marketplace</span>
        </a>

        <a
          href="#"
          className="link"
          onClick={(event) => event.preventDefault()}
        >
          <span className="nav-icon">🚀</span>
          <span>Find Pharmacy</span>
        </a>

        <a
          href="#"
          className={
            activePage === "dependents"
              ? "link active"
              : "link"
          }
          onClick={(event) =>
            openPage(event, goToMyDependents)
          }
        >
          <span className="nav-icon">▤</span>
          <span>My Dependents</span>
        </a>

        <a
          href="#"
          className="link"
          onClick={(event) => event.preventDefault()}
        >
          <span className="nav-icon">⚒️</span>
          <span>My Account</span>
        </a>

        <a
          href="#"
          className="link"
          onClick={(event) => event.preventDefault()}
        >
          <span className="nav-icon">⚒️</span>
          <span>Settings</span>
        </a>
      </nav>

      <div className="help-box">
        <span>?</span>
      </div>
    </aside>
  );
}

export default Sidebar;

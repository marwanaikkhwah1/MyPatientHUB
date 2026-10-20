function Sidebar({
  isCollapsed,
  isMobileOpen,
  onClose,
  activePage,
  goToDashboard,
  goToFindDoctor,
  goToFindClinic,
  goToMarketplace,
  goToFindPharmacy,
  goToMyDependents,
  goToChat,
  goToSettings,
}) {
  const items = [
    { label: "Dashboard", page: "dashboard", icon: "▣", action: goToDashboard },
    { label: "Appointments", icon: "▤" },
    { label: "Find Doctor", page: "doctor", icon: "♙", action: goToFindDoctor },
    { label: "Find Clinic", page: "clinic", icon: "▣", action: goToFindClinic },
    { label: "Chat", page: "chat", icon: "▤", action: goToChat },
    { label: "Find Marketplace", page: "marketplace", icon: "▦", action: goToMarketplace },
    { label: "Find Pharmacy", page: "pharmacy", icon: "✚", action: goToFindPharmacy },
    { label: "My Dependents", page: "dependents", icon: "▤", action: goToMyDependents },
    { label: "My Account", page: "settings", icon: "⚒️", action: goToSettings },
    { label: "Settings", page: "settings", icon: "⚙", action: goToSettings },
  ];

  function openPage(event, action) {
    event.preventDefault();
    if (action) {
      action();
      onClose?.();
    }
  }

  return (
    <aside
      className={`sidebar ${isCollapsed ? "collapsed" : ""} ${isMobileOpen ? "mobile-open" : ""}`}
      aria-label="Main navigation"
    >
      <button type="button" className="sidebar-close" onClick={onClose} aria-label="Close navigation">×</button>
      <div className="logo">
        <span className="logo-mark">M</span>
        <span>MyPatientHUB</span>
      </div>
      <nav className="nav">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.page ? `#/${item.page}` : "#"}
            className={activePage === item.page && item.page && item.label !== "My Account" ? "link active" : "link"}
            onClick={(event) => openPage(event, item.action)}
            aria-current={activePage === item.page && item.page && item.label !== "My Account" ? "page" : undefined}
            title={item.action ? item.label : `${item.label} (coming soon)`}
          >
            <span className="nav-icon" aria-hidden="true">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="help-box"><span>?</span></div>
    </aside>
  );
}

export default Sidebar;

import "./PatientPageHeader.css";

function PatientPageHeader({ title, onMenuClick, onLogout, onSettings, onDashboard }) {
  return (
    <header className="mph-topbar">
      <div className="mph-topbar-left">
        <div className="mph-crumb">
          <button type="button" onClick={onDashboard} aria-label="Go to Dashboard">⌂</button>
          <span>/</span><span>{title}</span>
        </div>
        <strong>{title}</strong>
      </div>
      <div className="mph-topbar-actions">
        <button type="button" className="mph-top-menu" onClick={onMenuClick} aria-label="Open navigation">☰</button>
        <label className="mph-top-search"><span aria-hidden="true">⌕</span><input aria-label="Search" placeholder="Type here..." /></label>
        <button type="button" className="mph-top-logout" onClick={onLogout}>◉ Log out</button>
        <button type="button" className="mph-top-icon" onClick={onSettings} title="Settings" aria-label="Settings">⚙</button>
        <span className="mph-top-icon mph-notification" title="Notifications" aria-label="Notifications">♟</span>
      </div>
    </header>
  );
}
export default PatientPageHeader;

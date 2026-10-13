import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import PatientPageHeader from "../components/PatientPageHeader";
import "./Settings.css";

const menuItems = [
  { id: "profile", label: "Profile", icon: "✦" },
  { id: "basic-info", label: "Basic Info", icon: "▣" },
  { id: "change-password", label: "Change Password", icon: "⬡" },
  { id: "two-factor", label: "2FA", icon: "▣" },
  { id: "sessions", label: "Sessions", icon: "⚒" },
  { id: "delete-account", label: "Delete Account", icon: "▤" },
];

const initialProfile = {
  firstName: "Alec", lastName: "Thompson", gender: "Male",
  birthMonth: "February", birthDay: "1", birthYear: "2021",
  email: "", bloodGroup: "A+", location: "", phone: "", height: "", weight: "",
};
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const Field = ({ label, children }) => <label className="mph-setting-field"><span>{label}</span>{children}</label>;

function Settings({ goToLogin, goToDashboard, goToSettings, ...navigation }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [profile, setProfile] = useState(initialProfile);
  const [invisible, setInvisible] = useState(false);
  const [password, setPassword] = useState({ current: "", next: "", confirm: "" });
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);
  const [notice, setNotice] = useState("");
  const [showSessions, setShowSessions] = useState({});

  function toggleMenu() {
    if (window.innerWidth <= 768) setIsMobileOpen((value) => !value);
    else setIsCollapsed((value) => !value);
  }
  function updateProfile(event) {
    const { name, value } = event.target;
    setProfile((old) => ({ ...old, [name]: value }));
  }
  function showNotice(message) {
    setNotice(message);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function submitProfile(event) {
    event.preventDefault();
    showNotice("Profile updated in this demo session only. A backend is needed to save it to an account.");
  }
  function submitPassword(event) {
    event.preventDefault();
    if (password.next.length < 6) return showNotice("New password must contain at least 6 characters.");
    if (password.next !== password.confirm) return showNotice("New password and confirmation do not match.");
    setPassword({ current: "", next: "", confirm: "" });
    showNotice("Password fields validated. Changing a real account password requires a secure backend.");
  }

  return (
    <div className={`app mph-new-page mph-settings-page ${isCollapsed ? "sidebar-collapsed" : ""}`}>
      <Sidebar isCollapsed={isCollapsed} isMobileOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} activePage="settings"
        {...navigation} goToDashboard={goToDashboard} goToSettings={goToSettings} />
      <main className="main mph-page-main">
        <PatientPageHeader title="Accountsetting" onMenuClick={toggleMenu} onLogout={goToLogin} onSettings={goToSettings} onDashboard={goToDashboard} />
        {notice && <div className="mph-settings-notice" role="status">{notice}<button type="button" onClick={() => setNotice("")} aria-label="Dismiss message">×</button></div>}
        <nav className="mph-settings-jump mph-settings-card" aria-label="Settings sections">
          {menuItems.map((item) => <a href={`#${item.id}`} key={item.id} onClick={(event) => { event.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}><span>{item.icon}</span>{item.label}</a>)}
        </nav>
        <section className="mph-settings-profile mph-settings-card" id="profile">
          <div className="mph-settings-avatar">AS</div>
          <div className="mph-profile-name"><strong>Azam Shah</strong><span>Patient</span></div>
          <label className="mph-visibility-toggle"><span>Switch to invisible</span><input type="checkbox" checked={invisible} onChange={(event) => setInvisible(event.target.checked)} /><span className="mph-switch" aria-hidden="true" /></label>
        </section>
        <form id="basic-info" className="mph-settings-card mph-settings-form" onSubmit={submitProfile}>
          <h2>Basic Info</h2>
          <div className="mph-settings-grid">
            <Field label="First Name"><input name="firstName" value={profile.firstName} onChange={updateProfile} required /></Field>
            <Field label="Last Name"><input name="lastName" value={profile.lastName} onChange={updateProfile} required /></Field>
            <Field label="I'm"><select name="gender" value={profile.gender} onChange={updateProfile}><option>Male</option><option>Female</option><option>Other</option><option>Prefer not to say</option></select></Field>
            <Field label="Birth Date"><div className="mph-birth-selects"><select aria-label="Birth month" name="birthMonth" value={profile.birthMonth} onChange={updateProfile}>{months.map((month) => <option key={month}>{month}</option>)}</select><select aria-label="Birth day" name="birthDay" value={profile.birthDay} onChange={updateProfile}>{Array.from({ length: 31 }, (_, i) => <option key={i+1}>{i+1}</option>)}</select><select aria-label="Birth year" name="birthYear" value={profile.birthYear} onChange={updateProfile}>{Array.from({ length: 110 }, (_, i) => <option key={2026-i}>{2026-i}</option>)}</select></div></Field>
            <Field label="Email"><input name="email" type="email" value={profile.email} onChange={updateProfile} placeholder="example@email.com" /></Field>
            <Field label="Blood Group"><select name="bloodGroup" value={profile.bloodGroup} onChange={updateProfile}>{["A+","A-","B+","B-","AB+","AB-","O+","O-","Unknown"].map((group) => <option key={group}>{group}</option>)}</select></Field>
            <Field label="Your Location"><input name="location" value={profile.location} onChange={updateProfile} placeholder="City, Country" /></Field>
            <Field label="Phone Number"><input name="phone" type="tel" value={profile.phone} onChange={updateProfile} placeholder="Phone Number" /></Field>
            <Field label="Height"><input name="height" type="number" min="0" value={profile.height} onChange={updateProfile} placeholder="Height (cm)" /></Field>
            <Field label="Weight"><input name="weight" type="number" min="0" value={profile.weight} onChange={updateProfile} placeholder="Weight (kg)" /></Field>
          </div>
          <div className="mph-settings-form-actions"><button type="submit" className="mph-primary-btn">SAVE CHANGES</button></div>
        </form>
        <form id="change-password" className="mph-settings-card mph-password-card" onSubmit={submitPassword}>
          <h2>Change Password</h2>
          <Field label="Current Password"><input type="password" autoComplete="current-password" value={password.current} onChange={(event) => setPassword((old) => ({ ...old, current: event.target.value }))} placeholder="Current Password" required /></Field>
          <Field label="New Password"><input type="password" autoComplete="new-password" value={password.next} onChange={(event) => setPassword((old) => ({ ...old, next: event.target.value }))} placeholder="New Password" minLength={6} required /></Field>
          <Field label="Confirm New Password"><input type="password" autoComplete="new-password" value={password.confirm} onChange={(event) => setPassword((old) => ({ ...old, confirm: event.target.value }))} placeholder="Confirm Password" required /></Field>
          <div className="mph-password-bottom"><div><h3>Password requirements</h3><p>Please follow this guide for a strong password</p><ul><li>One special character</li><li>Min 6 characters</li><li>One number (2 are recommended)</li><li>Change it often</li></ul></div><button type="submit" className="mph-primary-btn">UPDATE PASSWORD</button></div>
        </form>
        <section id="two-factor" className="mph-settings-card mph-settings-security">
          <div className="mph-settings-section-title"><h2>Two-factor authentication</h2><span className="mph-demo-badge">DEMO ONLY</span></div>
          <div className="mph-settings-security-row"><span>Security keys</span><span>No security keys</span><button type="button" onClick={() => showNotice("Security key enrollment needs a secure authentication backend.")}>ADD</button></div>
          <div className="mph-settings-security-row"><span>SMS number</span><span>Not configured</span><button type="button" onClick={() => showNotice("SMS verification requires a backend and SMS provider.")}>EDIT</button></div>
          <div className="mph-settings-security-row"><span>Authenticator app</span><span>Not configured</span><button type="button" onClick={() => showNotice("Authenticator setup requires a secure backend.")}>SET UP</button></div>
        </section>
        <section id="sessions" className="mph-settings-card mph-settings-sessions">
          <h2>Sessions</h2><p>Sample devices for layout preview. Actual logged-in devices require account authentication.</p>
          {[{ id: "current", label: "Current browser (demo)", region: "Local", active: true }, { id: "chrome", label: "Chrome on macOS (sample)", region: "US" }, { id: "safari", label: "Safari on iPhone (sample)", region: "US" }].map((session) => <div className="mph-settings-session" key={session.id}><span className="mph-session-device">▣</span><span className="mph-session-name">{session.label}{showSessions[session.id] && <small>Demo session — no real device tracking</small>}</span>{session.active && <span className="mph-demo-badge">ACTIVE</span>}<span className="mph-session-region">{session.region}</span><button type="button" onClick={() => setShowSessions((old) => ({ ...old, [session.id]: !old[session.id] }))}>{showSessions[session.id] ? "Less" : "See more →"}</button></div>)}
        </section>
        <section id="delete-account" className="mph-settings-card mph-delete-account">
          <h2>Delete Account</h2><p>Once you delete your account, there is no going back. Please be certain.</p>
          <div className="mph-delete-actions"><label><input type="checkbox" checked={deleteConfirmed} onChange={(event) => setDeleteConfirmed(event.target.checked)} /><span>Confirm <small>I want to delete my account.</small></span></label><div><button type="button" onClick={() => showNotice("Account deactivation requires a backend.")}>DEACTIVATE</button><button type="button" className="mph-danger-btn" disabled={!deleteConfirmed} onClick={() => showNotice("No account was deleted. This is a front-end demonstration.")}>DELETE ACCOUNT</button></div></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Settings;

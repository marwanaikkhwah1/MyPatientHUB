import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import ClinicMap from "../components/Clinicmap";
import "./ClinicPage.css";

function FindClinic({ goToLogin, goToSettings, ...navigation }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  function toggleMenu() {
    if (window.innerWidth <= 768) setIsMobileOpen((value) => !value);
    else setIsCollapsed((value) => !value);
  }

  return (
    <div className={`app clinic-page ${isCollapsed ? "sidebar-collapsed" : ""}`}>
      <Sidebar
        isCollapsed={isCollapsed} isMobileOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)} activePage="clinic"
        {...navigation} goToSettings={goToSettings}
      />
      <main className="main clinic-main">
        <button type="button" className="clinic-mobile-menu" onClick={toggleMenu}>☰ Menu</button>
        <Hero onLoginClick={goToLogin} onMenuClick={toggleMenu} onSettings={goToSettings} />
        <div className="clinic-content">
          <Filters />
          <div className="clinic-map-panel">
            <h2>Clinic locations</h2>
            <ClinicMap />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FindClinic;

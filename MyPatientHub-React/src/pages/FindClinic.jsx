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
  const [clinicQuery, setClinicQuery] = useState("");
  const [clinicArea, setClinicArea] = useState("");
  const [filters, setFilters] = useState({ specialty:"", gender:"", condition:"", language:"", online:false, primary:false });
  const sampleClinics = [
    {name:"Demo Family Clinic",area:"Central",specialty:"Doctor",gender:"Female",language:"Hindi",online:true,primary:true},
    {name:"Demo Children Clinic",area:"North",specialty:"Doctor",gender:"Male",language:"Pashto",online:false,primary:true},
    {name:"Demo Emergency Center",area:"Downtown",specialty:"Surgeon",gender:"Female",language:"German",online:true,primary:false},
  ];
  const matches = sampleClinics.filter(item => (`${item.name} ${item.specialty}`.toLowerCase().includes(clinicQuery.toLowerCase()))
    && item.area.toLowerCase().includes(clinicArea.toLowerCase())
    && (!filters.specialty || item.specialty === filters.specialty)
    && (!filters.gender || item.gender === filters.gender)
    && (!filters.language || item.language === filters.language)
    && (!filters.online || item.online) && (!filters.primary || item.primary));

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
        <Hero onLoginClick={goToLogin} onMenuClick={toggleMenu} onSettings={goToSettings}
          navigation={{...navigation, goToSettings}} onSearch={(term, area) => {setClinicQuery(term.trim());setClinicArea(area.trim());}} />
        <div className="clinic-content">
          <Filters values={filters} onChange={setFilters} />
          <div className="clinic-map-panel">
            <h2>Clinic locations</h2>
            <ClinicMap />
            <div className="mph-clinic-results"><strong>Demo clinic results ({matches.length})</strong>
              <p>These are sample records, not verified clinic listings or appointments.</p>
              {matches.map(item => <div className="mph-clinic-result" key={item.name}><b>{item.name}</b><span>{item.area} · {item.specialty} · {item.language}</span></div>)}
              {!matches.length && <p role="status">No matching sample clinics.</p>}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FindClinic;

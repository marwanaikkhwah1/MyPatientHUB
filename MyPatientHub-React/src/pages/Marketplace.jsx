import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import FindMarketplace from "../components/FindMarketplace";

function Marketplace({ goToLogin, goToSettings, ...navigation }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  function toggleMenu() {
    if (window.innerWidth <= 768) setIsMobileOpen((value) => !value);
    else setIsCollapsed((value) => !value);
  }
  return (
    <div className={`app ${isCollapsed ? "sidebar-collapsed" : ""}`}>
      <Sidebar
        isCollapsed={isCollapsed} isMobileOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)} activePage="marketplace"
        {...navigation} goToSettings={goToSettings}
      />
      <main className="main marketplace-main">
        <FindMarketplace onLogout={goToLogin} onMenuClick={toggleMenu} onSettings={goToSettings} navigation={{...navigation,goToSettings}} />
      </main>
      <Footer />
    </div>
  );
}

export default Marketplace;

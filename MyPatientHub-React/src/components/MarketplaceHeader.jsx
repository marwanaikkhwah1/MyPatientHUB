import GlobalSearch from "./GlobalSearch";
import "./Header.css";
function Header({ onLogout, onMenuClick, onSettings, navigation }) { return ( <header className="marketplace-header">
  <div className="header-left">
    <div className="breadcrumb">
      <span>⌂</span>
      <span>/</span>
      <span>Marketplace</span>
    </div>

    <h1>Marketplace</h1>
    
  </div>

  <button type="button" className="header-menu" onClick={onMenuClick} aria-label="Open navigation">☰</button>

  <div className="header-right">

    <div className="top-search"><GlobalSearch navigation={navigation} /></div>

    <button type="button" className="logout-btn" onClick={onLogout}>
      👤Log out
    </button>

    <button type="button" className="header-icon" onClick={onSettings} aria-label="Settings">
      ⚙
    </button>

    <button className="header-icon">
      <span style={{ color: "#6b7280" }}>🩶</span>
    </button>

  </div>

</header>
); }
export default Header;

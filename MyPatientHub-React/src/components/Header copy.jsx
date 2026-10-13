import "./Header.css";
function Header() { return ( <header className="marketplace-header">
  <div className="header-left">
    <div className="breadcrumb">
      <span>⌂</span>
      <span>/</span>
      <span>Marketplace</span>
    </div>

    <h1>Marketplace</h1>
    
  </div>

  <div className="header-menu">
    <span>☰</span>
  </div>

  <div className="header-right">

    <div className="top-search">
      <span>⌕</span>
      <input
        type="search"
        placeholder="Type here..."
      />
    </div>

    <button className="logout-btn">
      👤Log out
    </button>

    <button className="header-icon">
      ⚙
    </button>

    <button className="header-icon">
      <span style={{ color: "#6b7280" }}>🩶</span>
    </button>

  </div>

</header>
); }
export default Header;

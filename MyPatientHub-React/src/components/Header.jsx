import GlobalSearch from "./GlobalSearch";
function Header({ onMenuClick, onLogout, onSettings, navigation }) {

    function handleLogout(event) {
        event.preventDefault();
        if (onLogout) onLogout();
    }

    return (
        <header className="head">

            <div className="head-left">

                <div className="breadcrumb">
                    <span>⌂</span>
                    <span>/</span>
                    <span>Dashboard</span>
                </div>

                <h1>Dashboard</h1>

            </div>

            <button
                className="menu-btn"
                onClick={onMenuClick}
            >
                ☰
            </button>

            <div className="head-right">

                <div className="search"><GlobalSearch navigation={navigation} /></div>

                <a
                    href="#"
                    className="logout"
                    onClick={handleLogout}
                >
                    ● Log out
                </a>

                <a href="#/settings" className="head-icon" onClick={(event) => { event.preventDefault(); onSettings?.(); }}>
                    ⚙
                </a>

                <a href="#" className="head-icon">
                    ♟
                </a>

            </div>

        </header>
    );
}

export default Header;
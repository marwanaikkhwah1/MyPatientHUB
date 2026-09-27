function Header({ onMenuClick }) {

    function handleLogout(event) {
        event.preventDefault();

        window.location.href =
            "../Medical Clinic/clinic.html";
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

                <div className="search">
                    <span>⌕</span>

                    <input
                        type="text"
                        placeholder="Type here..."
                    />
                </div>

                <a
                    href="#"
                    className="logout"
                    onClick={handleLogout}
                >
                    ● Log out
                </a>

                <a href="#" className="head-icon">
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
function Sidebar({
    isCollapsed,
    isMobileOpen,
    onClose,
    activePage,
    goToDashboard,
    goToFindDoctor,
    goToMyDependents
}) {

    function openDashboard(event) {

        event.preventDefault();

        if (goToDashboard) {
            goToDashboard();
        }
    }

    function openFindDoctor(event) {

        event.preventDefault();

        if (goToFindDoctor) {
            goToFindDoctor();
        }
    }
    function openMyDependents(event) {
    event.preventDefault();

    if (goToMyDependents) {
        goToMyDependents();
    }

    if (onClose) {
        onClose();
    }
}

    return (
        <aside
            className={`sidebar
                ${isCollapsed ? "collapsed" : ""}
                ${isMobileOpen ? "mobile-open" : ""}
            `}
        >

            <button
                className="sidebar-close"
                onClick={onClose}
            >
                x
            </button>

            <div className="logo">
                <span className="logo-mark">M</span>
                <span>MyPatientHUB</span>
            </div>

            <nav className="nav">

                <a
                    href="#"
                    className={
                        activePage === "dashboard"
                            ? "link active"
                            : "link"
                    }
                    onClick={openDashboard}
                >
                    <span className="nav-icon">▣</span>
                    <span>Dashboard</span>
                </a>

                <a href="#" className="link">
                    <span className="nav-icon">▤</span>
                    <span>Appointments</span>
                </a>

                <a
                    href="#"
                    className={
                        activePage === "doctor"
                            ? "link active"
                            : "link"
                    }
                    onClick={openFindDoctor}
                >
                    <span className="nav-icon">♙</span>
                    <span>Find Doctor</span>
                </a>

                <a href="#" className="link">
                    <span className="nav-icon">▣</span>
                    <span>Find Clinic</span>
                </a>

                <a href="#" className="link">
                    <span className="nav-icon">▤</span>
                    <span>Chat</span>
                </a>

                <a href="#" className="link">
                    <span className="nav-icon">▦</span>
                    <span>Find Marketplace</span>
                </a>

                <a href="#" className="link">
                    <span className="nav-icon">🚀</span>
                    <span>Find Pharmacy</span>
                </a>

<a
    href="#"
    className={
        activePage === "dependents"
            ? "link active"
            : "link"
    }
    onClick={openMyDependents}
>
    <span className="nav-icon">▤</span>
    <span>My Dependents</span>
</a>
                <a href="#" className="link">
                    <span className="nav-icon">⚒</span>
                    <span>My Account</span>
                </a>

                <a href="#" className="link">
                    <span className="nav-icon">⚒</span>
                    <span>Settings</span>
                </a>

            </nav>

            <div className="help-box">
                <span>?</span>
            </div>

        </aside>
    );
}

export default Sidebar;
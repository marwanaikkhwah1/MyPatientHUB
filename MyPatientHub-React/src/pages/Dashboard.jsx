import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCards from "../components/DashboardCards";
import Footer from "../components/Footer";

function Dashboard({ goToFindDoctor }) {

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    function handleMenuClick() {

        if (window.innerWidth <= 768) {
            setIsMobileOpen(!isMobileOpen);
        } else {
            setIsCollapsed(!isCollapsed);
        }

    }

    function handleSidebarClose() {
        setIsMobileOpen(false);
    }

    return (
        <div
            className={`app ${
                isCollapsed ? "sidebar-collapsed" : ""
            }`}
        >

            <Sidebar
                isCollapsed={isCollapsed}
                isMobileOpen={isMobileOpen}
                onClose={handleSidebarClose}
                activePage="dashboard"
                goToFindDoctor={goToFindDoctor}
            />

            <main className="main">

                <Header
                    onMenuClick={handleMenuClick}
                />

                <section className="welcome">
                    <h2>Welcome To MyPatientHUB!</h2>
                </section>

                <DashboardCards />

            </main>

            <Footer />

        </div>
    );
}

export default Dashboard;
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCards from "../components/DashboardCards";
import Footer from "../components/Footer";

function Dashboard({ goToLogin, ...navigation }) {

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [chartSearch,setChartSearch]=useState("");

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
                {...navigation}
            />

            <main className="main">

                <Header
                    onMenuClick={handleMenuClick}
                    onLogout={goToLogin}
                    onSettings={navigation.goToSettings}
                    navigation={navigation}
                />

                <section className="welcome">
                    <h2>Welcome To MyPatientHUB!</h2>
                </section>

                <label className="mph-dashboard-search">Filter dashboard statistics <input type="search" value={chartSearch} onChange={e=>setChartSearch(e.target.value)} placeholder="Search clinics, health, pharmacy..." /></label>
                <DashboardCards search={chartSearch} />

            </main>

            <Footer />

        </div>
    );
}

export default Dashboard;
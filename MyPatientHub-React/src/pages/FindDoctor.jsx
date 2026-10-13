import { useState } from "react";

import Sidebar from "../components/Sidebar";
import DoctorHero from "../components/DoctorHero";
import SpecialServices from "../components/SpecialServices";
import DoctorSpecialty from "../components/DoctorSpecialty";
import Footer from "../components/Footer";

function FindDoctor({ goToLogin, ...navigation }) {

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
            className={`doctor-app ${
                isCollapsed ? "sidebar-collapsed" : ""
            }`}
        >

            <Sidebar
                isCollapsed={isCollapsed}
                isMobileOpen={isMobileOpen}
                onClose={handleSidebarClose}
                activePage="doctor"
                {...navigation}
            />

            <main className="doctor-main">

                <DoctorHero
                    onMenuClick={handleMenuClick}
                    onLogout={goToLogin}
                />

                <SpecialServices />

                <DoctorSpecialty />

            </main>

            <Footer />

        </div>
    );
}

export default FindDoctor;
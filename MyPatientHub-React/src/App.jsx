import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import FindDoctor from "./pages/FindDoctor";

import "./App.css";
import "./find-doctor.css";

function App() {

    const [currentPage, setCurrentPage] =
        useState("dashboard");

    function goToDashboard() {
        setCurrentPage("dashboard");
    }

    function goToFindDoctor() {
        setCurrentPage("doctor");
    }

    if (currentPage === "doctor") {

        return (
            <FindDoctor
                goToDashboard={goToDashboard}
            />
        );
    }

    return (
        <Dashboard
            goToFindDoctor={goToFindDoctor}
        />
    );
}

export default App;
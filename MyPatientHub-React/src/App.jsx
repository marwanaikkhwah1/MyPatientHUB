import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import FindDoctor from "./pages/FindDoctor";
import MyDependents from "./components/MyDependents/MyDependents";

import "./App.css";
import "./find-doctor.css";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  function goToDashboard() {
    setCurrentPage("dashboard");
  }

  function goToFindDoctor() {
    setCurrentPage("doctor");
  }

  function goToMyDependents() {
    setCurrentPage("dependents");
  }

  if (currentPage === "dependents") {
    return (
      <MyDependents
        goToDashboard={goToDashboard}
      />
    );
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
      goToMyDependents={goToMyDependents}
    />
  );
}

export default App;
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import FindDoctor from "./pages/FindDoctor";
import FindClinic from "./pages/FindClinic";
import Marketplace from "./pages/Marketplace";
import MyDependents from "./components/MyDependents/MyDependents";
import Login from "./components/Login";
import "./App.css";
import "./find-doctor.css";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  function navigate(page) {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }

  const navigation = {
    goToDashboard: () => navigate("dashboard"),
    goToFindDoctor: () => navigate("doctor"),
    goToFindClinic: () => navigate("clinic"),
    goToMarketplace: () => navigate("marketplace"),
    goToMyDependents: () => navigate("dependents"),
    goToLogin: () => navigate("login"),
  };

  switch (currentPage) {
    case "login":
      return <Login onLoginSuccess={navigation.goToDashboard} />;
    case "doctor":
      return <FindDoctor {...navigation} />;
    case "clinic":
      return <FindClinic {...navigation} />;
    case "marketplace":
      return <Marketplace {...navigation} />;
    case "dependents":
      return <MyDependents {...navigation} />;
    case "dashboard":
    default:
      return <Dashboard {...navigation} />;
  }
}

export default App;

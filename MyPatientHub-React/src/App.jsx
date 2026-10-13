import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import FindDoctor from "./pages/FindDoctor";
import FindClinic from "./pages/FindClinic";
import Marketplace from "./pages/Marketplace";
import MyDependents from "./components/MyDependents/MyDependents";
import Chat from "./pages/Chat";
import Settings from "./pages/Settings";
import Login from "./components/Login";
import "./App.css";
import "./find-doctor.css";

const validPages = new Set(["login", "dashboard", "doctor", "clinic", "marketplace", "dependents", "chat", "settings"]);

function pageFromHash() {
  const page = window.location.hash.replace(/^#\/?/, "").split("?")[0];
  return validPages.has(page) ? page : "login";
}

function App() {
  const [currentPage, setCurrentPage] = useState(pageFromHash);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(pageFromHash());
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  function navigate(page) {
    if (!validPages.has(page)) return;
    setCurrentPage(page);
    window.location.hash = `/${page}`;
    window.scrollTo(0, 0);
  }

  const navigation = {
    goToDashboard: () => navigate("dashboard"),
    goToFindDoctor: () => navigate("doctor"),
    goToFindClinic: () => navigate("clinic"),
    goToMarketplace: () => navigate("marketplace"),
    goToMyDependents: () => navigate("dependents"),
    goToChat: () => navigate("chat"),
    goToSettings: () => navigate("settings"),
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
    case "chat":
      return <Chat {...navigation} />;
    case "settings":
      return <Settings {...navigation} />;
    case "dashboard":
    default:
      return <Dashboard {...navigation} />;
  }
}

export default App;

import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import FindDoctor from "./pages/FindDoctor";
import FindClinic from "./pages/FindClinic";
import Marketplace from "./pages/Marketplace"; 
import MyDependents from "./components/MyDependents/MyDependents"; 
import Chat from "./pages/Chat"; import Settings from "./pages/Settings"; 
import FindPharmacy from "./pages/FindPharmacy"; import Login from "./components/Login";
import SignUp from "./components/MarketplaceResults/Signup";
import "./App.css"; import "./find-doctor.css";
const validPages = new Set(["login", "signup", "dashboard", "doctor", "clinic", "marketplace", "pharmacy", "dependents", "chat", "settings",]);
function pageFromHash() {
const page = window.location.hash.replace(/^#\/?/, "").split("?")[0];
  return validPages.has(page) ? page : "login";
}
function App() {
  const [currentPage, setCurrentPage] = useState(pageFromHash);
  useEffect(() => {
    const onHashChange = () => { setCurrentPage(pageFromHash()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);
  function navigate(page) {
    if (!validPages.has(page)) return;
    window.location.hash = `/${page}`;
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }
  const navigation = { goToDashboard: () => navigate("dashboard"), goToFindDoctor: () => navigate("doctor"), goToFindClinic: () => navigate("clinic"), goToMarketplace: () => navigate("marketplace"), goToFindPharmacy: () => navigate("pharmacy"), goToMyDependents: () => navigate("dependents"), goToChat: () => navigate("chat"), goToSettings: () => navigate("settings"), goToLogin: () => navigate("login"), goToSignUp: () => navigate("signup"), };
  switch (currentPage) {
    case "login": return (<Login
      onLoginSuccess={navigation.goToDashboard}
      onSignUpClick={navigation.goToSignUp}
    />);
    case "signup":
      return <SignUp onLoginClick={navigation.goToLogin} />;

    case "doctor":
      return <FindDoctor {...navigation} />;

    case "clinic":
      return <FindClinic {...navigation} />;

    case "marketplace":
      return <Marketplace {...navigation} />;

    case "pharmacy":
      return <FindPharmacy {...navigation} />;

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
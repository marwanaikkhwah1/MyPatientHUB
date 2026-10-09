import Sidebar from "./components/Sidebar"; 
import Hero from "./components/Hero"; 
import Filters from "./components/Filters";
import ClinicMap from "./components/ClinicMap"; 
import Login from "./components/Login"; import "./components/FindClinic.css";
import FindMarketplace from "./components/FindMarketplace/FindMarketplace";
import FindPharmacy from "./components/FindMarketplace/FindPharmacy";


function App() { if (window.location.pathname === "/login") { return <Login />; }
if (window.location.pathname === "/marketplace") { return ( <div className="app"> <Sidebar />
    <main className="clinic-section">
      <FindMarketplace />
    </main>
  </div>
);
}
if (window.location.pathname === "/pharmacy") { return ( <div className="app"> <Sidebar />
    <main className="clinic-section">
      <FindPharmacy />
    </main>
  </div>
);
}
return ( <div className="app"> <Sidebar />
  <main className="clinic-section">
    <Hero />

    <section className="view-section">
      <button className="view-btn active">🗺 Map</button>
      <button className="view-btn">☷ List</button>
    </section>

    <section className="clinic-content">
      <Filters />
      <ClinicMap />
    </section>
  </main>
</div>
); }
export default App;



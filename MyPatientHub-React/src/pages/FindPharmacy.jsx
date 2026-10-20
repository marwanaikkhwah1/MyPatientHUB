import { useState } from "react";
import Sidebar from "../components/Sidebar";
import PatientPageHeader from "../components/PatientPageHeader";
import Footer from "../components/Footer";
import "./FindPharmacy.css";
const sample = [
 {name:"Demo Community Pharmacy",district:"Central",type:"General medicines",service:"Pickup"},
 {name:"Demo Family Pharmacy",district:"North",type:"Family care",service:"Delivery (demo)"},
 {name:"Demo Health Pharmacy",district:"Downtown",type:"Health products",service:"Pickup"},
 {name:"Demo Wellness Pharmacy",district:"Central",type:"Vitamins and supplements",service:"Delivery (demo)"},
];
export default function FindPharmacy({ goToLogin,goToDashboard,goToSettings,...navigation }) {
 const [collapsed,setCollapsed]=useState(false),[mobile,setMobile]=useState(false),[query,setQuery]=useState(""),[service,setService]=useState("");
 const visible=sample.filter(p=>`${p.name} ${p.district} ${p.type}`.toLowerCase().includes(query.trim().toLowerCase())&&(!service||p.service.toLowerCase().includes(service.toLowerCase())));
 function toggle(){if(window.innerWidth<=768)setMobile(!mobile);else setCollapsed(!collapsed)}
 const nav={...navigation,goToDashboard,goToSettings};
 return <div className={`app mph-new-page ${collapsed?"sidebar-collapsed":""}`}>
  <Sidebar isCollapsed={collapsed} isMobileOpen={mobile} onClose={()=>setMobile(false)} activePage="pharmacy" {...nav}/>
  <main className="main mph-page-main">
   <PatientPageHeader title="Find Pharmacy" onMenuClick={toggle} onLogout={goToLogin} onSettings={goToSettings} onDashboard={goToDashboard} navigation={nav}/>
   <section className="mph-pharmacy-panel"><h1>Find Pharmacy</h1><p>Search the sample pharmacy directory. These entries are demonstration data; availability and orders are not live.</p>
    <div className="mph-pharmacy-controls"><label>Search pharmacies <input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Name, area or products" /></label>
    <label>Service <select value={service} onChange={e=>setService(e.target.value)}><option value="">All services</option><option value="Pickup">Pickup</option><option value="Delivery">Delivery</option></select></label></div>
    <p role="status">{visible.length} matching sample pharmacies</p>
    <div className="mph-pharmacy-grid">{visible.map(pharmacy=><article key={pharmacy.name} className="mph-pharmacy-card"><div className="mph-pharmacy-icon">✚</div><h2>{pharmacy.name}</h2><p>{pharmacy.district}</p><p>{pharmacy.type}</p><strong>{pharmacy.service}</strong></article>)}</div>
    {!visible.length&&<p className="mph-no-results">No matching sample pharmacy. Try another keyword.</p>}
   </section>
  </main><Footer/>
 </div>;
}

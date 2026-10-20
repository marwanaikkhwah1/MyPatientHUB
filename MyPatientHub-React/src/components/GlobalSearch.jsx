import { useState } from "react";
import "./GlobalSearch.css";
const sections = [
  { title: "Dashboard", words: "health charts clinic stats", action: "goToDashboard" },
  { title: "Find Doctor", words: "doctor specialties appointment", action: "goToFindDoctor" },
  { title: "Find Clinic", words: "clinics hospitals map", action: "goToFindClinic" },
  { title: "Marketplace", words: "food products healthy diet", action: "goToMarketplace" },
  { title: "Find Pharmacy", words: "pharmacy medicine pharmacies", action: "goToFindPharmacy" },
  { title: "My Dependents", words: "family children dependent", action: "goToMyDependents" },
  { title: "Chat", words: "messages contacts", action: "goToChat" },
  { title: "Settings", words: "account profile password security", action: "goToSettings" },
];
export default function GlobalSearch({ navigation = {} }) {
  const [term, setTerm] = useState("");
  const [open, setOpen] = useState(false);
  const matches = sections.filter((item) => `${item.title} ${item.words}`.toLowerCase().includes(term.trim().toLowerCase()));
  function go(item) {
    navigation[item.action]?.();
    setTerm("");setOpen(false);
  }
  return <div className="mph-global-search">
    <span aria-hidden="true">⌕</span>
    <input type="search" aria-label="Search application pages" placeholder="Search pages..." value={term}
      onChange={(e) => {setTerm(e.target.value);setOpen(true);}}
      onFocus={() => setOpen(true)}
      onKeyDown={(e) => { if(e.key === "Escape") setOpen(false); if(e.key === "Enter" && matches.length){e.preventDefault();go(matches[0]);} }} />
    {open && term.trim() && <div className="mph-global-results" role="listbox">
      {matches.length ? matches.map(item => <button type="button" key={item.action} onClick={() => go(item)}>{item.title}</button>)
      : <div className="mph-global-empty">No matching page</div>}
    </div>}
  </div>;
}

const specialties = [
  { specialty: "Anesthesiology", doctor: "Sample Anaesthesia Provider", area: "Downtown" },
  { specialty: "Dermatology", doctor: "Sample Skin Specialist", area: "Central" },
  { specialty: "Emergency medicine", doctor: "Sample Emergency Provider", area: "North" },
  { specialty: "Neurology", doctor: "Sample Neurology Provider", area: "Downtown" },
  { specialty: "Consultation", doctor: "Sample General Consultant", area: "Central" },
  { specialty: "Ophthalmology", doctor: "Sample Eye Specialist", area: "North" },
];
export default function DoctorSpecialty({ search = "", area = "" }) {
 const q=search.trim().toLowerCase();const a=area.trim().toLowerCase();
 const list=specialties.filter(x=>(!q||`${x.specialty} ${x.doctor}`.toLowerCase().includes(q))&&(!a||a==="any area"||x.area.toLowerCase().includes(a)));
 return <section className="specialty-section"><h2>Find Doctors By Specialty</h2>
 <p className="specialty-description">Search and browse specialties. Provider entries are demonstration data, not bookable appointments.</p>
 <div className="specialty-grid">{list.map(x=><article className="specialty-item" key={x.specialty}>
 <div><strong>{x.specialty}</strong><small style={{display:"block",marginTop:6,color:"#7b8798"}}>{x.doctor} · {x.area} (demo)</small></div><span className="arrow">⌄</span></article>)}</div>
 {!list.length && <p role="status" className="mph-no-results">No matching specialties. Try another search.</p>}
 </section>;
}

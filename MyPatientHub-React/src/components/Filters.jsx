export default function Filters({ values = {}, onChange = () => {} }) {
 const update=(key,value)=>onChange(old=>({...old,[key]:value}));
 return <div className="filters"><h3>Filter By</h3>
 <label>Specialty<select value={values.specialty||""} onChange={e=>update("specialty",e.target.value)}><option value="">All specialties</option><option value="Doctor">Doctor</option><option value="Surgeon">Surgeon</option></select></label>
 <label>Gender<select value={values.gender||""} onChange={e=>update("gender",e.target.value)}><option value="">Any</option><option value="Female">Female</option><option value="Male">Male</option></select></label>
 <label>Language<select value={values.language||""} onChange={e=>update("language",e.target.value)}><option value="">All</option><option value="Hindi">Hindi</option><option value="German">German</option><option value="Pashto">Pashto</option></select></label>
 <h3>View Only</h3>
 <label><input type="checkbox" checked={!!values.online} onChange={e=>update("online",e.target.checked)}/>Online Scheduling (demo)</label>
 <label><input type="checkbox" checked={!!values.primary} onChange={e=>update("primary",e.target.checked)}/>Primary Care</label>
 <button type="button" className="mph-reset-filters" onClick={()=>onChange({specialty:"",gender:"",language:"",online:false,primary:false})}>Reset filters</button>
 </div>;
}

import { useState } from "react";
import "./FindMarketPlace.css";
import MarketplaceHeader from "./MarketplaceHeader";
import ResultTable from "./MarketplaceResults/ResultTable";
import ProductCard from "./ProductCard";
const image = `${import.meta.env.BASE_URL}images/marketplace.png`;
const products = [
 {name:"Food Panda",price:"5 RM",image,logoText:"foodpanda",description:"Healthy meal delivery service (sample listing)."},
 {name:"Grab Food",price:"10 RM",image,logoText:"GrabFood",description:"Healthy meal options (sample listing)."},
 {name:"Deliveroo",price:"15 RM",image,logoText:"Deliveroo",description:"Food delivery marketplace (sample listing)."},
 {name:"Minimalist",price:"20 RM",image,logoText:"Food",description:"Balanced meal selection (sample listing)."},
];
export default function FindMarketplace({ onLogout,onMenuClick,onSettings,navigation }) {
 const [query,setQuery]=useState("");
 const shown = products.filter(item => `${item.name} ${item.description} Healthy Diet`.toLowerCase().includes(query.toLowerCase()));
 return <div className="marketplace-page">
 <MarketplaceHeader onLogout={onLogout} onMenuClick={onMenuClick} onSettings={onSettings} navigation={navigation}/>
 <section className="marketplace-container"><h2>Search Marketplaces and order what you need</h2>
 <label className="mph-market-filter">Search products and providers <input type="search" placeholder="Search Healthy Diet, Food Panda..." value={query} onChange={e=>setQuery(e.target.value)}/></label>
 <div className="products-grid">{shown.map(product=><ProductCard key={product.name} product={product}/>)}</div>
 {!shown.length && <p className="mph-no-results" role="status">No matching products.</p>}
 </section><ResultTable externalSearch={query}/>
 </div>;
}

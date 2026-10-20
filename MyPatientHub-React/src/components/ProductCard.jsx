import { useState } from "react";
import "./ProductCard.css";
export default function ProductCard({ product }) {
 const [notice,setNotice]=useState(false);
 return <article className="product-card">
  <img src={product.image} alt="Healthy Diet meal" className="product-image"/>
  <div className="product-info"><div className="product-title"><span>Healthy Diet</span><span className="product-price">{product.price}</span></div>
    <h3 className="product-name"><span className="mph-provider-badge">{product.logoText}</span>{product.name}</h3>
    <p>{product.description}</p><button type="button" className="buy-button" onClick={()=>setNotice(true)}>BUY NOW</button>
    {notice && <small role="status" className="mph-card-demo-notice">Ordering requires a backend. This is a demo product.</small>}
  </div>
 </article>;
}

import "./FindMarketPlace.css"; import Header from "./MarketplaceHeader";
import ResultTable from "./MarketplaceResults/ResultTable"; import ProductCard from "./ProductCard";
const productImage = "/images/marketplace.png";
function FindMarketplace({ onLogout, onMenuClick, onSettings }) 
{ const products = [ { name: "Food Panda", price: "5 RM", 
image: productImage, logo: "/images/foodpanda.png", 
description: "As Uber works through a huge amount of internal management turmoil.", }, 
{ name: "Grab Food", price: "10 RM", image: productImage, logo: "/images/grabfood.png", 
description: "Music is something that every person has his or her own taste in.", }, 
{ name: "Deliveroo", price: "15 RM", image: productImage, description: "Different people have different tastes and enjoy various types of music.", },
{ name: "Minimalist", price: "20 RM", image: productImage, description: "Different people have different tastes and preferences.", }, ];

return ( <div className="marketplace-page"> 
<Header onLogout={onLogout} onMenuClick={onMenuClick} onSettings={onSettings} />
  <section className="marketplace-container">
    <h2>Search Marketplaces and order what you need</h2>
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
        />
      ))}
    </div>
  </section>
  <ResultTable />
</div>
); }
export default FindMarketplace;
import "./FindMarketplace.css"; import Header from "./Header"; import ProductCard from "./ProductCard";
import ResultTable from "./ResultTable"; 
import Footer2 from "./Footer2";
function FindMarketplace() { const products = [ { name: "Food Panda", price: "5 RM", image: "/images/marketplace.jpg",
   description: "As Uber works through a huge amount of internal management turmoil.", }, { name: "Grab Food",
     price: "10 RM", image: "/images/marketplace.jpg", description: "Music is something that every person has his or her that every person has his or", }, { name: "Deliveroo", price: "15 RM", image: "/images/marketplace.jpg", description: "Different people have different taste, and various types of music.", }, { name: "Minimalist", price: "20 RM", image: "/images/marketplace.jpg", description: "Different people have different taste, and various types of music.", }, ];
return ( <div className="marketplace-page"> <Header />
  <section className="marketplace-container">
    <h2>Search Marketplaces and order what you need</h2>

    <div className="products-grid">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
        />
      ))}
    </div>
  </section>
  <ResultTable />
  <Footer2 />
</div>
); }
export default FindMarketplace;
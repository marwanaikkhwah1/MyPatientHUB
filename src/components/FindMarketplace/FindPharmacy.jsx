import "./FindPharmacy.css"; import Header from "./Header"; import ProductCard from "./ProductCard"; import ResultsTable from "./ResultTable"; import Footer2 from "./Footer2";
const productImage = "/images/pharmacy.png";
function FindPharmacy() { const products = [ { name: "Carry Medical", price: "10 RM", image: productImage, description: "Quality medicines and pharmacy products.", }, { name: "Pool Medical", price: "9 RM", image: productImage, description: "Find the medicines and healthcare products you need.", }, { name: "OK Pharmacy", price: "8 RM", image: productImage, description: "Explore a range of pharmacy and healthcare products.", }, { name: "Hamza Pharma", price: "11 RM", image: productImage, description: "Reliable pharmacy services and medical supplies.", }, ];
return ( <div className="marketplace-page"> <Header />
  <section className="marketplace-container">
    <h2>Search Pharmacies and find the medicines you need</h2>

    <div className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>

    <ResultsTable />
  </section>

  <Footer2 />
</div>
); }
export default FindPharmacy;
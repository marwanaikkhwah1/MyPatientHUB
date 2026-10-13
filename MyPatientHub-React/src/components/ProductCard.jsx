import "./ProductCard.css";
function ProductCard({ product }) { return ( <article className="product-card"> <img
src={product.image}
alt={product.name}
className="product-image"
/>
  <div className="product-info">

    <div className="product-title">
      <span>Healthy Diet</span>

      <span className="product-price">
        {product.price}
      </span>
    </div>

    <h3 className="product-name">
      {product.logo && (
        <img
          src={product.logo}
          alt=""
          className="service-logo"
        />
      )}

      {product.name}
    </h3>

    <p>{product.description}</p>

    <button className="buy-button">
      BUY NOW
    </button>

  </div>

</article>
); }
export default ProductCard;

import { useState } from "react";
import "./ResultTable.css";

const products = [
  {
    id: "243598234",
    name: "Healthy Diet",
    category: "Food",
    service: "Food panda",
    logo: "foodpanda",
    logoText: "foodpanda",
    discount: 0,
    price: "10 RM",
  },
  {
    id: "877712",
    name: "Healthy Diet",
    category: "Food",
    service: "Grab Food",
    logo: "grab",
    logoText: "GrabFood",
    discount: 5,
    price: "9 RM",
  },
  {
    id: "0134729",
    name: "Healthy Diet",
    category: "Food",
    service: "Deliveroo",
    logo: "deliveroo",
    logoText: "Deliveroo",
    discount: 9,
    price: "25 RM",
  },
  {
    id: "113213",
    name: "Healthy Diet",
    category: "Food",
    service: "Food Panda",
    logo: "foodpanda",
    logoText: "foodpanda",
    discount: 5,
    price: "15 RM",
  },
  {
    id: "634729-1",
    displayId: "634729",
    name: "Healthy Diet",
    category: "Food",
    service: "Food Panda",
    logo: "foodpanda",
    logoText: "foodpanda",
    discount: 7,
    price: "25 RM",
  },
  {
    id: "634729-2",
    displayId: "634729",
    name: "Healthy Diet",
    category: "Food",
    service: "Food Panda",
    logo: "foodpanda",
    logoText: "foodpanda",
    discount: 0,
    price: "20 RM",
  },
];

function ResultsTable() {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(7);

  const filteredProducts = products.filter((product) => {
    const searchableText = [
      product.name,
      product.category,
      product.service,
      product.price,
      product.id,
      product.displayId || "",
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(search.toLowerCase());
  });

  const visibleProducts = filteredProducts.slice(0, entries);

  return (
    <section className="results-table">
      <h2>Other results for healthy diet search</h2>

      <div className="table-controls">
        <div className="entries-control">
          <select
            value={entries}
            onChange={(event) =>
              setEntries(Number(event.target.value))
            }
          >
            <option value={7}>7</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>

          <span>entries per page</span>
        </div>

        <input
          className="table-search"
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>CATEGORY</th>
              <th>SERVICE BY</th>
              <th>DISCOUNT</th>
              <th>PRICE</th>
              <th>ID</th>
            </tr>
          </thead>

          <tbody>
            {visibleProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="name-cell">
                    <img
                      src={`${import.meta.env.BASE_URL}images/marketplace.png`}
                      alt={product.name}
                      className="food-thumbnail"
                    />

                    <span>{product.name}</span>
                  </div>
                </td>

                <td>{product.category}</td>

                <td>
                  <div className="service-cell">
                    <div
                      className={`service-logo ${product.logo}`}
                    >
                      {product.logoText}
                    </div>

                    <span>{product.service}</span>
                  </div>
                </td>

                <td>{product.discount}</td>
                <td>{product.price}</td>
                <td>{product.displayId || product.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="table-info">
        {visibleProducts.length === 0
          ? "Showing 0 of 0 entries"
          : `Showing 1 to ${visibleProducts.length} of ${filteredProducts.length} entries`}
      </p>
    </section>
  );
}

export default ResultsTable;

import "./ResultTable.css";
function ResultsTable() { const medicines = [ { name: "Paracetamol", category: "Medicine", pharmacy: "Carry Medical", discount: 7, price: "25 RM", id: "634729" }, { name: "Vitamin C", category: "Supplement", pharmacy: "Pool Medical", discount: 5, price: "20 RM", id: "877712" }, { name: "First Aid Kit", category: "Medical Supplies", pharmacy: "OK Pharmacy", discount: 9, price: "15 RM", id: "0134729" }, { name: "Cough Syrup", category: "Medicine", pharmacy: "Hamza Pharma", discount: 3, price: "10 RM", id: "113213" }, { name: "Face Mask", category: "Medical Supplies", pharmacy: "Carry Medical", discount: 7, price: "25 RM", id: "243598" }, { name: "Hand Sanitizer", category: "Healthcare", pharmacy: "Pool Medical", discount: 0, price: "20 RM", id: "634721" }, ];
return ( <section className="results-table"> <h2>Other results for pharmacy search</h2>
  <div className="table-controls">
    <div className="entries-control">
      <select defaultValue="7">
        <option value="7">7</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <span>entries per page</span>
    </div>

    <input
      className="table-search"
      type="search"
      placeholder="Search..."
    />
  </div>

  <div className="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>CATEGORY</th>
          <th>PHARMACY</th>
          <th>DISCOUNT</th>
          <th>PRICE</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        {medicines.map((medicine) => (
          <tr key={medicine.id}>
            <td>
              <div className="name-cell">
                <span>{medicine.name}</span>
              </div>
            </td>
            <td>{medicine.category}</td>
            <td>
              <div className="service-cell">
                <span>{medicine.pharmacy}</span>
              </div>
            </td>
            <td>{medicine.discount}%</td>
            <td>{medicine.price}</td>
            <td>{medicine.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <p className="table-info">Showing 1 to 6 of 6 entries</p>
</section>
); }
export default ResultsTable;
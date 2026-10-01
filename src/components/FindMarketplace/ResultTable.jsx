import "./ResultTable.css";

function ResultsTable() {
  return (
    <section className="results-table">
      <h2>Other results for healthy diet search</h2>

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
              <th>SERVICE BY</th>
              <th>DISCOUNT</th>
              <th>PRICE</th>
              <th>ID</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div className="name-cell">
                  <img
  src="/images/healthy-diett.jpg"
  alt="Healthy Diet"
  className="food-thumbnail"
/>
                  <span>Healthy Diet</span>
                </div>
              </td>
              <td>Food</td>
              <td>
                <div className="service-cell">
                  <div className="service-logo foodpanda">foodpanda</div>
                  <span>Food panda</span>
                </div>
              </td>
              <td>0</td>
              <td>10 RM</td>
              <td>243598234</td>
            </tr>

            <tr>
              <td>
                <div className="name-cell">
                 <img
  src="/images/healthy-diett.jpg"
  alt="Healthy Diet"
  className="food-thumbnail"
/>
                  <span>Healthy Diet</span>
                </div>
              </td>
              <td>Food</td>
              <td>
                <div className="service-cell">
                  <div className="service-logo grab">GrabFood</div>
                  <span>Grab Food</span>
                </div>
              </td>
              <td>5</td>
              <td>9 RM</td>
              <td>877712</td>
            </tr>

            <tr>
              <td>
                <div className="name-cell">
<img
  src="/images/healthy-diett.jpg"
  alt="Healthy Diet"
  className="food-thumbnail"
/>
                  <span>Healthy Diet</span>
                </div>
              </td>
              <td>Food</td>
              <td>
                <div className="service-cell">
                  <div className="service-logo deliveroo">Deliveroo</div>
                  <span>Deliveroo</span>
                </div>
              </td>
              <td>9</td>
              <td>25 RM</td>
              <td>0134729</td>
            </tr>

            <tr>
              <td>
                <div className="name-cell">
<img
  src="/images/healthy-diett.jpg"
  alt="Healthy Diet"
  className="food-thumbnail"
/>
                  <span>Healthy Diet</span>
                </div>
              </td>
              <td>Food</td>
              <td>
                <div className="service-cell">
                  <div className="service-logo foodpanda">foodpanda</div>
                  <span>Food Panda</span>
                </div>
              </td>
              <td>5</td>
              <td>15 RM</td>
              <td>113213</td>
            </tr>

            <tr>
              <td>
                <div className="name-cell">
<img
  src="/images/healthy-diett.jpg"
  alt="Healthy Diet"
  className="food-thumbnail"
/>
                  <span>Healthy Diet</span>
                </div>
              </td>
              <td>Food</td>
              <td>
                <div className="service-cell">
                  <div className="service-logo foodpanda">foodpanda</div>
                  <span>Food Panda</span>
                </div>
              </td>
              <td>7</td>
              <td>25 RM</td>
              <td>634729</td>
            </tr>
            <tr>
              <td>
                <div className="name-cell">
                  <img
  src="/images/healthy-diett.jpg"
  alt="Healthy Diet"
  className="food-thumbnail"
/>
                  <span>Healthy Diet</span>
                </div>
              </td>
              <td>Food</td>
              <td>
                <div className="service-cell">
                  <div className="service-logo foodpanda">foodpanda</div>
                  <span>Food Panda</span>
                </div>
              </td>
              <td>0</td>
              <td>20 RM</td>
              <td>634729</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="table-info">Showing 1 to 7 of 6 entries</p>
    </section>
  );
}

export default ResultsTable;
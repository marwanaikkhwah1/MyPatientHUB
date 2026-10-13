function Filters() {
  return (
    <div className="filters">

      <div>
        <input type="text" placeholder="Primary Care" />
        <input
          type="text"
          placeholder="Zip code or Neighborhood"
        />
      </div>

      <h3>Filter By</h3>

      <select>
        <option>Specialty</option>
        <option>Doctor</option>
        <option>Sergan</option>
      </select>

      <select>
        <option>Gender</option>
        <option>Female</option>
        <option>Male</option>
      </select>

      <select>
        <option>Condition</option>
        <option>Emergency</option>
        <option>Family Doctor</option>
      </select>

      <select>
        <option>Languages</option>
        <option>Hindi</option>
        <option>German</option>
        <option>Pashto</option>
      </select>

      <h3>Providers Who Treat</h3>

      <label>
        <input type="checkbox" name="treat" value="all" />
        All Ages
      </label>

      <br />

      <label>
        <input type="checkbox" name="treat" value="children" />
        Children
      </label>

      <br />

      <label>
        <input type="checkbox" name="treat" value="adults" />
        Adults
      </label>

      <h3>View Only</h3>

      <label>
        <input type="checkbox" name="view" value="online" />
        Online Scheduling
      </label>

      <br />

      <label>
        <input type="checkbox" name="view" value="primary" />
        Primary Care
      </label>

    </div>
  );
}

export default Filters;
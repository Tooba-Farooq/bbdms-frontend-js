import React, { useLayoutEffect, useState } from "react";
import "../styles/Results.css"; 
import "../styles/Search.css"
import { useLocation } from "react-router-dom";

import notFoundImage from "../assets/images/notfound.png";

const mockBloodData = [
  {
    hospital: "Agha Khan Hospital",
    bloodGroup: "A+",
    component: "Whole Blood",
    units: 5,
    priceperunit: 400,
  },
  {
    hospital: "Liaquat National Hospital",
    bloodGroup: "B+",
    component: "Plasma",
    units: 2,
    priceperunit: 400,
  },
  {
    hospital: "Jinnah Medical Center",
    bloodGroup: "O-",
    component: "Platelets",
    units: 3,
    priceperunit: 400,
  },
];

const BloodResults = () => {
    const location = useLocation();
    const query = location.state?.query || "";
  const [search, setSearch] = useState(query);

  const filteredResults = mockBloodData.filter((item) =>
    `${item.hospital} ${item.bloodGroup} ${item.component}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="blood-results-container">
      <input
        type="text"
        placeholder="Search by hospital, blood group or component"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {filteredResults.length > 0 ? (
        <table className="results-table">
          <thead>
            <tr>
              <th>Hospital Name</th>
              <th>Blood Group</th>
              <th>Component</th>
              <th>Units Available</th>
              <th>Price/Unit</th>
              <th>Request</th>
            </tr>
          </thead>
          <tbody>
            {filteredResults.map((entry, index) => (
              <tr key={index}>
                <td>{entry.hospital}</td>
                <td>{entry.bloodGroup}</td>
                <td>{entry.component}</td>
                <td>{entry.units}</td>
                <td>{entry.priceperunit}</td>
                <td>
                  <button className="request-btn">Request</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-matches">
          <img
            src={notFoundImage} // replace with your image path
            alt="No matches found"
            className="no-results-img"
          />
          <p>No matches Found.</p>
        </div>
      )}
    </div>
  );
};

export default BloodResults;

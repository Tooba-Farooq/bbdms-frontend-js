import React, { useState } from "react";
import "../styles/Search.css";

import aghaKhanImage from "../assets/images/Agha_khan_hospital1.jpg";
import generalHospitalImage from "../assets/images/Agha_khan_hospital1.jpg";
import sunriseMedicalImage from "../assets/images/Agha_khan_hospital1.jpg";
import redCrossClinicImage from "../assets/images/Agha_khan_hospital1.jpg";
import healthFirstImage from "../assets/images/Agha_khan_hospital1.jpg";
import wellCareCenterImage from "../assets/images/Agha_khan_hospital1.jpg";
import trustHospitalImage from "../assets/images/Agha_khan_hospital1.jpg";
import medlineHospitalImage from "../assets/images/Agha_khan_hospital1.jpg";

const hospitals = [
  { name: "Agha Khan", image: aghaKhanImage },
  { name: "General Hospital", image: generalHospitalImage },
  { name: "Sunrise Medical", image: sunriseMedicalImage },
  { name: "Red Cross Clinic", image: redCrossClinicImage },
  { name: "Health First", image: healthFirstImage },
  { name: "WellCare Center", image: wellCareCenterImage },
  { name: "Trust Hospital", image: trustHospitalImage },
  { name: "Medline Hospital", image: medlineHospitalImage },
];

const Search = () => {
  const [search, setSearch] = useState("");

  const filtered = hospitals.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search hospital..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="hospital-grid">
        {filtered.map((h, i) => (
          <div className="hospital-card" key={i}>
            <img src={h.image} alt={h.name} />
            <h4>{h.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;

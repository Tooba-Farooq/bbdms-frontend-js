import React, { useState } from "react";
import "../styles/Search.css";

import aghaKhanImage from "../assets/images/agha khan.png";
import generalHospitalImage from "../assets/images/liaquat hospital.png";
import sunriseMedicalImage from "../assets/images/jpmc.png";
import redCrossClinicImage from "../assets/images/fatimid.png";
import healthFirstImage from "../assets/images/nicvd.png";
import wellCareCenterImage from "../assets/images/husaini.png";
import trustHospitalImage from "../assets/images/chughtai.png";
import medlineHospitalImage from "../assets/images/pwa.png";

const hospitals = [
  { name: "Agha Khan Hospital", image: aghaKhanImage },
  { name: "Liaquat National Hospital", image: generalHospitalImage },
  { name: "Jinnah Medical Center", image: sunriseMedicalImage },
  { name: "Fatimid Foundation Blood Bank", image: redCrossClinicImage },
  { name: "National Institute of Cardivascular Disease (NICVD)", image: healthFirstImage },
  { name: "Husaini Blood Bank", image: wellCareCenterImage },
  { name: "Chughtai Blood Center", image: trustHospitalImage },
  { name: "PWA Blood Bank", image: medlineHospitalImage },
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
        placeholder="Search hospital/ blood"
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

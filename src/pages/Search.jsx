import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styles/Search.css";

import aghaKhanImage from "../assets/images/agha khan.png";
import liaquatHospitalImage from "../assets/images/liaquat hospital.png";
import JPMCImage from "../assets/images/jpmc.png";
import FatimidImage from "../assets/images/fatimid.png";
import NICVDImage from "../assets/images/nicvd.png";
import HusainiImage from "../assets/images/husaini.png";
import chughtaiImage from "../assets/images/chughtai.png";
import PWAImage from "../assets/images/pwa.png";

const hospitals = [
  { name: "Agha Khan Hospital", image: aghaKhanImage },
  { name: "Liaquat National Hospital", image: liaquatHospitalImage },
  { name: "Jinnah Medical Center", image: JPMCImage },
  { name: "Fatimid Foundation Blood Bank", image: FatimidImage },
  { name: "National Institute of Cardivascular Disease (NICVD)", image: NICVDImage },
  { name: "Husaini Blood Bank", image: HusainiImage },
  { name: "Chughtai Blood Center", image: chughtaiImage },
  { name: "PWA Blood Bank", image: PWAImage },
];

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && search.trim()) {
      navigate("/results", { state: { query: search } });
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search hospital/ blood group/ blood component"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown} // 👈
        className="search-bar"
      />

      <div className="hospital-grid">
        {hospitals.map((h, i) => (
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



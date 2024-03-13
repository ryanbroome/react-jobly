import React, { useState, useEffect } from "react";

import JoblyApi from "./api/Api";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";

function CompanyList() {
  const [companies, setCompanies] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  //* Fetch companies at load, and anytime searchTerm changes coming back up from searchForm
  useEffect(
    function fetchCompanies() {
      async function filterCompanies() {
        const filteredRes = await JoblyApi.searchCompanies(searchTerm);
        console.log("useEffect searchTerm", searchTerm);
        setCompanies(filteredRes);
      }
      filterCompanies(searchTerm);
    },
    [searchTerm]
  );

  //* method to filterCompanies companies
  const searchCompanies = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  //* method to reset companies to full list
  const resetList = () => {
    setSearchTerm("");
  };

  return (
    <div>
      <h1 className="CompanyList">Companies List</h1>
      <SearchForm
        search={searchCompanies}
        resetList={resetList}
      />
      {companies ? (
        <div>
          <button onClick={resetList}>Reset</button>
          {companies.map((company) => (
            <CompanyCard company={company} />
          ))}
        </div>
      ) : (
        <i>loading</i>
      )}
    </div>
  );
}

export default CompanyList;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import JoblyApi from "./api/Api";
import SearchForm from "./SearchForm";

function CompanyList() {
  const [companies, setCompanies] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(function fetchCompaniesWhenMounted() {
    async function fetchCompanies() {
      const companyResult = await JoblyApi.getCompanies();
      setCompanies(companyResult);
    }
    fetchCompanies();
  }, []);

  // method to update companies by searchterm
  // *Mentor - I was thinking this could be used instead of making a duplicate useEffect, how would I modify to accomplish? The issue is after searching you'd have to search again to restore list.
  useEffect(
    function () {
      const search = async function (searchTerm = "") {
        const filteredRes = await JoblyApi.searchCompanies(searchTerm);
        setCompanies(filteredRes);
      };
      search(searchTerm);
    },
    [searchTerm]
  );

  const search = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const resetList = () => {
    setSearchTerm("");
  };

  return (
    <div>
      <h1>Matching Companies: {companies ? companies.length : "Loading"}</h1>
      <SearchForm
        search={search}
        resetList={resetList}
      />
      {companies ? (
        <div>
          <button onClick={resetList}>Reset</button>
          <ul>
            {companies.map((company) => (
              <li key={company.name}>
                <Link to={`companies/${company.handle}`}>{company.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <i>loading</i>
      )}
    </div>
  );
}

export default CompanyList;

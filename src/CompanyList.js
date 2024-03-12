import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import JoblyApi from "./api/Api";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";

function CompanyList() {
  const [companies, setCompanies] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  // Fetch data at load, and anytime searchTerm changes from searchForm
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

  // method to filterCompanies companies
  const searchCompanies = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  // method to reset companies to full list
  const resetList = () => {
    setSearchTerm("");
  };

  return (
    <div>
      <h1>Matching Companies: {companies ? companies.length : "Loading"}</h1>
      <SearchForm
        search={searchCompanies}
        resetList={resetList}
      />
      {/* Companies List Map and Create new CompanyCard by passing each Company to Company Card component */}
      {companies ? (
        <div>
          <button onClick={resetList}>Reset</button>
          <ul>
            {companies.map((company) => (
              <li key={company.name}>
                <CompanyCard company={company} />
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

/** UNUSED RE-FACTORED CODE
 * 
 *  useEffect(function fetchCompaniesWhenMounted() {
  //  / async function fetchCompanies() {
  //    const companyResult = await JoblyApi.getCompanies();
  //    setCompanies(companyResult);
  //  }
  //  fetchCompanies();
  ///}, []); 
 * 
 * **/

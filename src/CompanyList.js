import React, { useState, useEffect, useContext } from "react";
import JoblyApi from "./api/Api";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import { useHistory } from "react-router-dom";
import userContext from "./userContext";

/** CompanyList
 *  renders list of Companies from database if validated token if not redirects to "/"
 *
 *
 * **/
function CompanyList() {
  const history = useHistory();
  const { validUser, token } = useContext(userContext);
  const [companies, setCompanies] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  //* Fetch companies at load, and anytime searchTerm changes coming back up from searchForm
  useEffect(
    function fetchCompanies() {
      async function filterCompanies() {
        try {
          const filteredRes = await JoblyApi.searchCompanies(searchTerm);
          setCompanies(filteredRes);
        } catch (err) {
          alert(`No Companies found with ${searchTerm}`);
        }
      }
      filterCompanies();
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

  if (!token) {
    history.push("/");
    return null;
  } else
    return (
      <div>
        <h1 className="CompanyList">Companies List for</h1>
        <SearchForm
          search={searchCompanies}
          resetList={resetList}
        />
        {companies ? (
          <div>
            <button onClick={resetList}>Reset</button>
            {companies.map((company) => (
              <CompanyCard
                company={company}
                key={company.handle}
              />
            ))}
          </div>
        ) : (
          <i>loading</i>
        )}
      </div>
    );
}

export default CompanyList;

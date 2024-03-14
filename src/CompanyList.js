import React, { useState, useEffect, useContext } from "react";
import JoblyApi from "./api/Api";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
// * used to fix and re-direct when !validUser
import { useHistory } from "react-router-dom";
import userContext from "./userContext";

/** CompanyList
 *  renders list of Companies from database when validUser logged in if !validUser redirects to "/"
 *
 *
 * **/
function CompanyList() {
  const history = useHistory();
  const { validUser } = useContext(userContext);

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
      {validUser ? (
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
      ) : (
        history.push("/")
      )}
    </div>
  );
}

export default CompanyList;

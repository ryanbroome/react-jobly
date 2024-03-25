import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import JobCard from "./JobCard";
import userContext from "./userContext";
import { Card, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem, CardText } from "reactstrap";
import JoblyApi from "./api/Api";

function CompanyDetail() {
  const history = useHistory();
  const { token } = useContext(userContext);
  const { handle } = useParams();

  const [company, setCompany] = useState(null);

  useEffect(
    function fetchCompanyWhenMounted() {
      async function fetchCompany() {
        try {
          const res = await JoblyApi.getCompany(handle);
          setCompany(res);
        } catch (err) {
          console.log(err);
        }
      }
      fetchCompany();
    },
    [handle]
  );

  // render JSX methods
  function showCompanyIfToken(company) {
    return (
      <div className="CompanyDetail">
        {company ? (
          <Card
            color="light"
            body
            className="text-center">
            <CardBody>
              <CardTitle tag="h3">{company.name}</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>{company.description}</CardText>
              <ListGroup flush>
                <ListGroupItem key="CompanyDetail-employees">Employees: {company.numEmployees}</ListGroupItem>
              </ListGroup>
              {company.jobs.length > 0 ? (
                <ListGroup flush>
                  {company.jobs.map((j, i) => (
                    <ListGroupItem key={`CompanyDetail-JobList-${i}`}>
                      <JobCard
                        job={j}
                        key={j.id}
                      />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              ) : (
                "This company is not currently hiring or does not have any jobs listed"
              )}
            </CardBody>
          </Card>
        ) : (
          "Loading Spinner"
        )}
      </div>
    );
  }

  // render null and redirect
  function redirectIfNoToken() {
    history.push("/");
    return null;
  }

  return token ? showCompanyIfToken(company) : redirectIfNoToken();
}

export default CompanyDetail;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JoblyApi from "./api/Api";

const Stage = () => {
  const [data, setData] = useState(null);

  // fetch Data
  useEffect(function fetchDataWhenMounted() {
    async function fetchData() {
      const result = await JoblyApi["method"];
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Next On Stage!</h1>
      {data ? (
        <div>
          <ul>
            {data.map((dataPoint) => (
              <li key={dataPoint}>
                <Link to={`data`}>{dataPoint}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <i>loading</i>
      )}
    </div>
  );
};

export default Stage;

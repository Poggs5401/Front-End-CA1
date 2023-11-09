import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { Row, Col, Spinner, Image } from "react-bootstrap";

const SingleCountry = () => {
  let { name } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((response) => {
        console.log(response.data[0]);
        setCountry(response.data[0]);

        console.log(Object.values(response.data[0].currencies));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!country) {
    return <Spinner animation="grow" />;
  }

  return (
    <Row className="d-flex justify-content-center">
      <Col>
        <h3>
          <b>Common Name: </b> {country.name.common}
        </h3>
        <h3>
          <b>Official Name: </b> {country.name.official}
        </h3>
        <h3>
          <b>Capital City: </b> {country.capital}
        </h3>
        <h3>
          <b>Region: </b> {country.region}
        </h3>
        <h3>
          <b>Sub-Region: </b> {country.subregion}
        </h3>
        <h3>
          <b>National Currency: </b> {Object.values(country.currencies)[0].name}
        </h3>
      </Col>
      <Col>
        <Image className="pb-5" src={country.flags.png} />
      </Col>
    </Row>
  );
};

export default SingleCountry;

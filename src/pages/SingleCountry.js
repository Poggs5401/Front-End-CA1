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
    return(
        <Spinner animation="grow" />
    );
  }

  return (
    <Row>
        <Col>
        <Image  src={country.flags.png}/>
        </Col>
        <Col>
        <h1><b>Common Name: </b> {country.name.common}</h1>
        <h1><b>Official Name: </b> {country.name.official}</h1>
        <h1><b>Region: </b> {country.region}</h1>
        <h1><b>Sub-Region: </b> {country.subregion}</h1>
        <h1><b>National Currency: </b> {Object.values(country.currencies)[0].name}</h1>
        </Col>
    </Row>
  
  );
};

export default SingleCountry;

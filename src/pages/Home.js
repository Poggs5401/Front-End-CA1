import { useState, useEffect } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";

import CountryCard from "../components/CountryCard";

const Home = (props) => {
  const [countriesList, setCountriesList] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  console.log(props);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        console.log(response.data);
        setCountriesList(response.data);
        setFilteredCountries(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (props.searchTerm <= 2) {
          setFilteredCountries(countriesList);
        } else {
          let filter = countriesList.filter((country) => {
            return country.name.common
              .toLowerCase()
              .includes(props.searchTerm);
          });
    
          setFilteredCountries(filter);
    
          console.log(filter);
        }
  }, [countriesList, props.searchTerm]);

  // const handleChange = (e) => {
  //   setSearchTerm(e.target.value);

  //   if (searchTerm < 2) {
  //     setFilteredCountries(countriesList);
  //   } else {
  //     let filter = countriesList.filter((country) => {
  //       return country.name.common
  //         .toLowerCase()
  //         .includes(searchTerm);
  //     });

  //     setFilteredCountries(filter);

  //     console.log(filter);
  //   }
  // };

  let countryCards = filteredCountries.map((country, i) => {
    return (
      <CountryCard
        key={i}
        flag={country.flags.png}
        name={country.name.common}
        region={country.region}
      />
    );
  });

  return (
    <>
      {/* <input type="text" onChange={handleChange} value={searchTerm} /> */}
      <Row className="gap-3 mx-auto" md={3} xs={1}>
        {countryCards}
      </Row>
    </>
  );
};

export default Home;

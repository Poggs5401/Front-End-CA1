import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { useState } from "react";
import './CountryCard.css'

//pages
import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";

//components
import NavBar from "./components/NavBar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // let navigate = useNavigate();

  const onHandleChange = (e) => {
    // navigate('/');
    setSearchTerm(e.target.value);
  };

  return (
    <Router>
      <Container>
        <Row>
          <Col>
            <NavBar onHandleChange={onHandleChange} searchTerm={searchTerm} />
            <Routes>
              <Route path="/" element={<Home searchTerm={searchTerm}/>} />
              <Route path="/country/:name" element={<SingleCountry />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;

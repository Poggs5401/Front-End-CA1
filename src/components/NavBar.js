import { Row, Col, Spinner, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = (props) => {
  // const [searchTerm, setSearchTerm] = useState("");

  // const handleChange = (e) => {
  //     setSearchTerm(e.target.value);
  // };

  return (
    <>
      <Row className="mt-3 mb-3">
        <Col>
          <div className="d-flex gap-3 align-items-center">
            <div>
              <Image
                src="https://www.svgrepo.com/show/220165/geolocalization.svg"
                width={48}
                height={48}
                className="img-fluid"
              />
            </div>
            <div>
              <h5>World Exploration</h5>
            </div>
            <div>
              <input
                type="text"
                onChange={props.onHandleChange}
                value={props.searchTerm}
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default NavBar;

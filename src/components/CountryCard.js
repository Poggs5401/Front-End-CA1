import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const CountryCard = (props) => {
  return (
    <Card style={{width:"250px", height:"250px"}} className="card-hover">
      <Card.Img src={props.flag} variant="top" />
      <Card.Body>
        <Card.Title><Link style={{ textDecoration: 'none', color: 'black' }} to={`/country/${props.name}`} >{props.name} </Link></Card.Title>
        <p>{props.region}</p>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;

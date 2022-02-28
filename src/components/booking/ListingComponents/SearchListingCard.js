import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Button,
  Popover,
  PopoverBody,
  PopoverHeader,
  InputGroupText,
  Input,
  InputGroup,
  InputGroupAddon,
  FormGroup,
  ButtonGroup,
} from "reactstrap";
// Core Components

import { formatMoneyWhole } from "src/formatMoney";

function SearchListingCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();
  function goToListing() {
    history.push("/listing/" + props.id);
  }

  return (
    <Row
      id={props.num}
      style={{
        width: "100%",
        padding: "20px 20px",
        marginLeft: "0px",
        marginRight: "0px",
        backgroundColor: isHovered ? " #e3e3e3" : "#fff",
        borderTop: props.num === 0 ? "1px solid #d3d3d3" : "0px solid #d3d3d3",
        borderBottom: "1px solid #d3d3d3",
        cursor: "pointer",
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={goToListing}
    >
      <Col
        xs={6}
        className="d-flex align-items-center justify-content-center"
        style={{
          padding: "0px 0px",
        }}
      >
        <img
          src={props.image}
          style={{ width: "100%", borderRadius: "15px" }}
        />
      </Col>
      <Col xs={6}>
        <Row>
          <Col>
            <h5>{props.name}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{props.beds} beds</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{props.baths} baths</p>
          </Col>
        </Row>
        <Row className="d-flex align-items-flex-end justify-content-flex-end">
          <Col>
            <h5 className="text-right">
              <b>{formatMoneyWhole(props.rent)}</b> / Month
            </h5>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default SearchListingCard;

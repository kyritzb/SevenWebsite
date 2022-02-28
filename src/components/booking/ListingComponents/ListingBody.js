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

import ReserveCard from "./ReserveCard";
import Map from "../Map";

function ListingBody(props) {
  return (
    <>
      <Row>
        <Col lg="8">
          <div style={{ paddingTop: "40px" }}>
            <h2>{props.name}</h2>
            <p>
              {props.beds} guests | {props.beds} beds | {props.baths} baths
            </p>

            <p>{props.description}</p>
          </div>
        </Col>
        <Col lg="4">
          <div style={{ paddingTop: "40px" }}>
            <ReserveCard rent={props.rent} />
          </div>
        </Col>
      </Row>
      <Row>
        <div style={{ padding: "50px 15px", width: "100%" }}>
          <h2>Where you'll be</h2>
          <Map height={40} />
        </div>
      </Row>
    </>
  );
}

export default ListingBody;

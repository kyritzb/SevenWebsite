import React, { useEffect, useState } from "react";

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

function ReserveCard(props) {
  return (
    <div
      style={{
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        borderRadius: "15px",
        border: "1px solid #d3d3d3",
        padding: "20px 50px",
      }}
    >
      <h5>
        <b>{formatMoneyWhole(props.rent)}</b> / Month
      </h5>
      <Button block>Reserve</Button>
      <p className="text-center">You won't be charged yet</p>
      <Row>
        <Col>
          <p>
            <u>{formatMoneyWhole(props.rent)} x 1 months</u>
          </p>
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <p>{formatMoneyWhole(props.rent)}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <u>Cleaning fee</u>
          </p>
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <p>{formatMoneyWhole(105)}</p>
        </Col>
      </Row>
      <hr
        style={{
          color: "#c4c4c4",
          backgroundColor: "#c4c4c4",
          height: 1,
          width: "100%",
        }}
      />
      <Row>
        <Col>
          <p>Total before taxes</p>
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <p>{formatMoneyWhole(props.rent + 105)}</p>
        </Col>
      </Row>
    </div>
  );
}

export default ReserveCard;

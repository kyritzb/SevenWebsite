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

function ListingTitle(props) {
  return (
    <div style={{ paddingTop: "40px" }}>
      <h2>{props.name}</h2>
      <p>
        <u>{props.address}</u>
      </p>
    </div>
  );
}

export default ListingTitle;

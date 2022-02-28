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

function ListingHeaderImage(props) {
  return (
    <div>
      <img
        src={props.image}
        style={{
          width: "100%",
          height: "60vh",
          borderRadius: "15px",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default ListingHeaderImage;

import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// Core Components

function FilterBar() {
  const [searchFocus, setSearchFocus] = React.useState("");
  const [searchText, setSearchText] = React.useState("");

  function search() {
    console.log("searching");
  }
  return (
    <>
      <FormGroup
        className={searchFocus}
        style={{ marginBottom: "0px" }}
        onSubmit={search}
      >
        <InputGroup className="input-group-alternative">
          <Input
            placeholder="Enter an address, neighborhood, city, or ZIP code"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setSearchFocus("focused")}
            onBlur={() => setSearchFocus("")}
          ></Input>
          <InputGroupAddon addonType="append">
            <InputGroupText>
              <i
                style={{ cursor: "pointer" }}
                onClick={search}
                className="fas fa-search"
              ></i>
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </>
  );
}

export default FilterBar;

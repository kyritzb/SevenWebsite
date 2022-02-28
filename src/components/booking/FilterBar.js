import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";
// Core Components
import SearchBar from "./FilterBarComponents/SearchBar";
import PriceFilter from "./FilterBarComponents/PriceFilter";
import BedAndBathFilter from "./FilterBarComponents/BedAndBathFilter";

function FilterBar() {
  return (
    <div
      style={{
        backgroundColor: "#025dd1 ",
        height: "12vh",
      }}
    >
      <Container className="d-flex" style={{ width: "100%", height: "100%" }}>
        <Row
          className="align-items-center justify-content-start"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Col
            xs="2"
            className="d-flex align-items-center justify-content-center"
          >
            <PriceFilter />
          </Col>
          <Col
            xs="2"
            className="d-flex align-items-center justify-content-center"
          >
            <BedAndBathFilter />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FilterBar;

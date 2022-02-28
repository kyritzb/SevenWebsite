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
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
// reactstrap components

// Core Components

import SearchListingCard from "./ListingComponents/SearchListingCard";
import { getAllListings } from "api";

function Listings() {
  const [listings, setListings] = useState([]);

  async function init() {
    let res = await getAllListings();
    console.log(res);
    if (res.isSuccess) {
      setListings(res.payload);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "81vh",
        padding: "20px 10px",
        overflow: "auto",
      }}
    >
      <Row
        style={{
          paddingLeft: "40px",
        }}
      >
        <h5>Rental Listings in Hoboken</h5>
      </Row>
      <Row
        style={{
          paddingLeft: "40px",
        }}
      >
        <p>
          <b>{listings.length} Results</b>
        </p>
      </Row>
      {listings.map((item, i) => {
        return (
          <Row style={{ marginLeft: "0px", marginRight: "0px" }}>
            <Col
              style={{
                paddingRight: "0px",
                paddingLeft: "0px",
              }}
            >
              <SearchListingCard
                num={i}
                id={item._id}
                image={item.image}
                beds={item.beds}
                baths={item.baths}
                rent={item.rent}
                name={item.name}
                description={item.description}
                address={item.address}
              />
            </Col>
          </Row>
        );
      })}
    </div>
  );
}

export default Listings;

import React from "react";

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
} from "reactstrap";
// Core Components

import ClickAwayListener from "@mui/material/ClickAwayListener";

function PriceFilter() {
  const [priceMinFocus, setPriceMinFocus] = React.useState("");
  const [priceMin, setPriceMin] = React.useState("");

  const [priceMaxFocus, setPriceMaxFocus] = React.useState("");
  const [priceMax, setPriceMax] = React.useState("");

  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const id = "price-filter";

  const handleClickAway = () => {
    setPopoverOpen(false);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div style={{ width: "100%" }}>
          <Button
            block
            color={"white"}
            id={id}
            type="button"
            data-toggle="popover"
            onClick={() => setPopoverOpen(!popoverOpen)}
          >
            Price
          </Button>

          <Popover
            delay={0}
            placement={"bottom"}
            target={id}
            isOpen={popoverOpen}
            popperClassName={"white" !== "dark" ? "popover-" + "white" : ""}
            trigger="focus"
          >
            <PopoverHeader>Price</PopoverHeader>

            <PopoverBody>
              <Container
                className="d-flex"
                style={{ width: "100%", height: "100%" }}
              >
                <Row
                  style={{
                    position: "relative",
                    height: "100%",
                  }}
                >
                  <Col className="d-flex align-items-center justify-content-center">
                    <FormGroup
                      className={priceMinFocus}
                      style={{ marginBottom: "0px" }}
                    >
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Min"
                          type="text"
                          onChange={(e) => setPriceMin(e.target.value)}
                          onFocus={() => setPriceMinFocus("focused")}
                          onBlur={() => setPriceMinFocus("")}
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <hr
                      style={{
                        color: "#c4c4c4",
                        backgroundColor: "#c4c4c4",
                        height: 1,
                        width: "100%",
                      }}
                    />
                  </Col>
                  <Col className="d-flex align-items-center justify-content-center">
                    <FormGroup
                      className={priceMinFocus}
                      style={{ marginBottom: "0px" }}
                    >
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Max"
                          type="text"
                          onChange={(e) => setPriceMax(e.target.value)}
                          onFocus={() => setPriceMaxFocus("focused")}
                          onBlur={() => setPriceMaxFocus("")}
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
              </Container>
            </PopoverBody>
            <PopoverBody
              style={{
                backgroundColor: "#025dd1",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                size="sm"
                color="secondary"
                onClick={() => setPopoverOpen(false)}
              >
                Save
              </Button>
            </PopoverBody>
          </Popover>
        </div>
      </ClickAwayListener>
    </>
  );
}

export default PriceFilter;

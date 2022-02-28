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
  ButtonGroup,
} from "reactstrap";
// Core Components

import ClickAwayListener from "@mui/material/ClickAwayListener";

function PriceFilter() {
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const [selectedBeds, setSelectedBeds] = React.useState("any");
  const [selectedBaths, setSelectedBaths] = React.useState("any");
  const id = "bed-bath-filter";

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
            Bed & Bath
          </Button>
          <Popover
            delay={0}
            placement={"bottom"}
            target={id}
            isOpen={popoverOpen}
            popperClassName={"white" !== "dark" ? "popover-" + "white" : ""}
            trigger="focus"
          >
            <PopoverHeader>Bedrooms</PopoverHeader>
            <PopoverBody>
              <ButtonGroup aria-label="Minimum Beds">
                <Button
                  outline={selectedBeds === "any" ? false : true}
                  color="primary"
                  onClick={() => setSelectedBeds("any")}
                >
                  Any
                </Button>
                <Button
                  outline={selectedBeds === "1" ? false : true}
                  color="primary"
                  onClick={() => setSelectedBeds("1")}
                >
                  1+
                </Button>
                <Button
                  outline={selectedBeds === "2" ? false : true}
                  color="primary"
                  onClick={() => setSelectedBeds("2")}
                >
                  2+
                </Button>
                <Button
                  outline={selectedBeds === "3" ? false : true}
                  color="primary"
                  onClick={() => setSelectedBeds("3")}
                >
                  3+
                </Button>
              </ButtonGroup>
            </PopoverBody>
            <PopoverHeader>Bathrooms</PopoverHeader>
            <PopoverBody>
              <ButtonGroup aria-label="Minimum Beds">
                <Button
                  outline={selectedBaths === "any" ? false : true}
                  color="primary"
                  onClick={() => setSelectedBaths("any")}
                >
                  Any
                </Button>
                <Button
                  outline={selectedBaths === "1" ? false : true}
                  color="primary"
                  onClick={() => setSelectedBaths("1")}
                >
                  1+
                </Button>
                <Button
                  outline={selectedBaths === "2" ? false : true}
                  color="primary"
                  onClick={() => setSelectedBaths("2")}
                >
                  2+
                </Button>
                <Button
                  outline={selectedBaths === "3" ? false : true}
                  color="primary"
                  onClick={() => setSelectedBaths("3")}
                >
                  3+
                </Button>
              </ButtonGroup>
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

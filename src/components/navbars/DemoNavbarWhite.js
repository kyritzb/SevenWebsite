import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Row,
  Button,
  Col,
} from "reactstrap";

import ConnectWallet from "../buttons/ConnectWallet";
import { ReactComponent as GypsyIconWhite } from "../../assets/img/brand/logo_white.svg";

import SearchBar from "components/booking/FilterBarComponents/SearchBar";
function DemoNavbar(props) {
  const [atTop, setAtTop] = React.useState(true);
  const [collapseOpen, toggleCollapse] = React.useState(false);

  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();

    window.onscroll = function () {
      if (window.pageYOffset <= 5) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    };
  });
  let navbarType = "";
  switch (props.type) {
    case "dark":
      navbarType = "bg-default navbar-dark";
      break;
    case "transparent":
      navbarType = "navbar-transparent";
      break;
    case "primary":
      navbarType = "bg-primary navbar-dark";
      break;
    case "white":
      navbarType = "bg-white";
      break;
    default:
      navbarType = "bg-default navbar-dark";
      break;
  }
  return (
    <>
      <Navbar
        className={"navbar-main headroom " + navbarType}
        expand="lg"
        id="navbar-main"
        style={{ paddingRight: "20px", paddingLeft: "20px" }}
      >
        <Row
          style={{ width: "100%", paddingRight: "20px", paddingLeft: "20px" }}
        >
          <Col xs="3">
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <GypsyIconWhite />
            </NavbarBrand>
          </Col>
          <Col xs="6" style={{ paddingRight: "100px", paddingLeft: "100px" }}>
            <SearchBar />
          </Col>
          <Col
            xs="3"
            className="d-flex align-items-center justify-content-end"
            style={{ paddingRight: "0px" }}
          >
            <ConnectWallet />
          </Col>
        </Row>
      </Navbar>
    </>
  );
}

DemoNavbar.defaultProps = {
  type: "dark",
};

DemoNavbar.propTypes = {
  type: PropTypes.oneOf(["dark", "transparent", "primary", "white"]),
};

export default DemoNavbar;

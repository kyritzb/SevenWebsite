/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import Bowser from "bowser";
import Desktop from "./JoinDesktop";
import Mobile from "./JoinMobile";

// Core Components

function Join() {
  const [device, setDevice] = React.useState("");

  const getDevice = () => {
    return Bowser.getParser(window.navigator.userAgent).getPlatformType();
  };

  React.useEffect(() => {
    setDevice(getDevice());
  }, [getDevice]);
  return <> {device === "mobile" ? <Mobile /> : <Desktop />}</>;
}

export default Join;

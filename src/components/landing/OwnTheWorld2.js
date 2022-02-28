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
import Desktop from "./OwnTheWorld2Desktop";
import Mobile from "./OwnTheWorld2Mobile";

// Core Components

function OwnTheWorld2() {
  const [device, setDevice] = React.useState("");

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  const getDevice = () => {
    return Bowser.getParser(window.navigator.userAgent).getPlatformType();
  };

  React.useEffect(() => {
    setDevice(getDevice());
  }, [getDevice]);
  return <> {device === "mobile" ? <Mobile /> : <Desktop />}</>;
}

export default OwnTheWorld2;

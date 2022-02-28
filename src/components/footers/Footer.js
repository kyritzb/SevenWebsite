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
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

// Core Components

function DemoFooter() {
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
  return <> {device === "mobile" ? <DesktopFooter /> : <DesktopFooter />}</>;
}

export default DemoFooter;

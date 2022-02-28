import React from "react";
import { useHistory } from "react-router-dom";
// reactstrap components
import {
  Badge,
  Button,
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

import Bowser from "bowser";

import Background from "assets/img/landing.png";
// Core Components

function HeaderIndex() {
  const [device, setDevice] = React.useState("");
  const history = useHistory();

  const getDevice = () => {
    return Bowser.getParser(window.navigator.userAgent).getPlatformType();
  };

  function goToSignup() {
    history.push("/join");
  }

  React.useEffect(() => {
    setDevice(getDevice());
  }, [getDevice]);

  return (
    <>
      <div
        className="section d-flex"
        style={{
          height: "100vh",
          width: "100vw",
          backgroundImage: `url(${Background})`,
          backgroundPosition: "center center",
          paddingLeft: "0px",
          backgroundSize: "cover",
          flexDirection: "column",
          justifyContent: "end",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            paddingLeft: "30px",
            paddingRight: "30px",
            left: device == "mobile" ? "0px" : "3vw",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: device === "desktop" ? "5vw" : "45px",
            }}
          >
            Live differently
          </h1>
          <h3
            style={{
              color: "#B7B7B7",
              fontSize: device === "desktop" ? "2vw" : "20px",
            }}
          >
            Become a global citizen starting $800/week
          </h3>
          <div style={{ paddingTop: "20px" }}>
            <Button outline>Learn More</Button>
            <Button onClick={goToSignup}>Lets Go</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderIndex;

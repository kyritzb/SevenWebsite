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

// Core Components

function WhyGypsy() {
  const [device, setDevice] = React.useState("");

  const getDevice = () => {
    return Bowser.getParser(window.navigator.userAgent).getPlatformType();
  };

  React.useEffect(() => {
    setDevice(getDevice());
  }, [getDevice]);

  return (
    <>
      <section style={{ backgroundColor: "#021725" }}>
        <div
          style={{
            width: "100%",
            minHeight: "30vh",
            marginTop: "20px",
            padding: "25px 20vw",
          }}
        >
          <h2 className="text-center" style={{ color: "#51BCDA" }}>
            Gypsy is the future of living
          </h2>
          <p
            className="text-white text-center"
            style={{
              marginTop: "40px",
            }}
          >
            Our mission is to rewrite life on this planet. To help people own
            the lands they walk on. To unite humanity. To help everyone see
            themselves in others. To eliminate boundaries. To transcend
            politics.
          </p>
          <p
            className="text-white text-center"
            style={{
              marginTop: "10px",
            }}
          >
            To bring to a grinding halt the wheels of feudalism that have turned
            and turned for centuries. To soar the human spirit that yearns for
            growth and fulfillment. To set people free - of locations, of
            labels, of a bondage called rent.
          </p>
          <p
            className="text-white text-center"
            style={{
              marginTop: "10px",
            }}
          >
            It has to happen. Right now.
          </p>
        </div>
      </section>
    </>
  );
}

export default WhyGypsy;

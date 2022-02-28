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

import Gypsy1 from "assets/img/gypsy1.png";
import Gypsy2 from "assets/img/gypsy2.png";
import Gypsy3 from "assets/img/gypsy3.png";

// Core Components

function OwnTheWorld2() {
  return (
    <>
      <section style={{ backgroundColor: "white" }}>
        <Container
          style={{
            paddingTop: "50px",
            paddingBottom: "20px",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <Row className="row-grid mb-5" style={{ backgroundColor: "#F3F3F3" }}>
            <Col lg="6" style={{ paddingRight: "0px", paddingLeft: "0px" }}>
              <img src={Gypsy1} style={{ width: "100%" }} />
            </Col>
            <Col
              lg="6"
              style={{
                backgroundColor: "#F3F3F3",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <h2 className="text-black text-center">Peace of mind</h2>
              <p style={{ fontSize: "20px" }}>We sweat the small stuff.</p>
              <div className="text-start">
                <p
                  className="text-black"
                  style={{ paddingTop: "50px", paddingBottom: "20px" }}
                >
                  We handle the logistics -- flight, transportation, food,
                  room-service and WiFi.
                </p>
                <p className="text-black" style={{ paddingBottom: "20px" }}>
                  Gypsy Concierge is your 24x7 digital assistant. Help is always
                  at your fingertips.
                </p>
                <p className="text-black" style={{ paddingBottom: "20px" }}>
                  Feel at home no matter where you are. Ship supplies from home
                  country. Forward mail. Plan adventures around your stay.
                </p>
                <p className="text-black" style={{ paddingBottom: "20px" }}>
                  Whatever you need -- push a button and it’s done.
                </p>
              </div>
              <Button>Explore Locations</Button>
            </Col>
          </Row>
          <Row className="row-grid mb-5" style={{ backgroundColor: "#F3F3F3" }}>
            <Col
              lg="6"
              style={{
                backgroundColor: "#F3F3F3",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <h2 className="text-black text-center">Community</h2>
              <p style={{ fontSize: "20px" }}>
                Authentic people. Powerful networks.
              </p>
              <div className="text-start">
                <p
                  className="text-black"
                  style={{ paddingTop: "50px", paddingBottom: "20px" }}
                >
                  We unite the brave, the relentless, and the ambitious
                  risk-takers. We empower the global citizen.
                </p>
                <p className="text-black" style={{ paddingBottom: "20px" }}>
                  Stop swiping left/right on location based apps and meet
                  amazing individuals as you travel the world.
                </p>
                <p className="text-black" style={{ paddingBottom: "20px" }}>
                  Authentic people. Powerful networks. Adventure is in our
                  spirit.
                </p>
              </div>

              <Button>Join</Button>
            </Col>
            <Col lg="6" style={{ paddingRight: "0px", paddingLeft: "0px" }}>
              <img src={Gypsy2} style={{ width: "100%" }} />
            </Col>
          </Row>
          <Row className="row-grid mb-5" style={{ backgroundColor: "#F3F3F3" }}>
            <Col lg="6" style={{ paddingRight: "0px", paddingLeft: "0px" }}>
              <img src={Gypsy3} style={{ width: "100%" }} />
            </Col>
            <Col
              lg="6"
              style={{
                backgroundColor: "#F3F3F3",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <h2 className="text-black text-center">Gain Equity</h2>
              <p style={{ fontSize: "20px" }}>A platform like no other</p>
              <div className="text-start">
                <p
                  className="text-black"
                  style={{ paddingTop: "50px", paddingBottom: "20px" }}
                >
                  Stop wasting money on “rent”. Gypsy is on a mission to end
                  feudalism.
                </p>
                <p className="text-black" style={{ paddingBottom: "20px" }}>
                  Earn equity at every stay -- with no commitments.
                </p>
                <p className="text-black" style={{ paddingBottom: "20px" }}>
                  Enjoy kickbacks and perks the longer you stay in our network.
                  Our protocols and remittance networks are designed to give
                  power back to the people.
                </p>
              </div>

              <Button>Learn how</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default OwnTheWorld2;

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

// Core Components

function OwnTheWorld() {
  return (
    <>
      <section style={{ backgroundColor: "#021725" }}>
        <div
          style={{
            width: "100%",
            paddingTop: "50px",
            marginBottom: "25px",
          }}
        >
          <h2 className="text-center" style={{ color: "#51BCDA" }}>
            One rent. Multiple continents.
          </h2>
          <p className="text-center" style={{ color: "#B7B7B7" }}>
            Live and work from exotic locations.
          </p>
        </div>
        <Container style={{ paddingBottom: "50px" }}>
          <Row className="row-grid mb-5">
            <Col lg="4" style={{}}>
              <h2 className="text-white text-center" style={{ margin: "0px" }}>
                3 Months
              </h2>
              <p className="text-center" style={{ color: "#B7B7B7" }}>
                Take us on a test drive
              </p>
              <p style={{ color: "#B7B7B7" }}>
                You get to live in Europe or South America with us.{" "}
              </p>
              <p style={{ color: "#B7B7B7", margin: "0px" }}>
                <b className="text-white">Europe</b>: France, Portugal, and
                Italy
              </p>
              <p style={{ color: "#B7B7B7" }}>
                <b className="text-white">South America</b>: Costa Rica,
                Columbia and Peru
              </p>
              <p style={{ color: "#51BCDA", margin: "0px" }}>
                Plans starting $1000/week.
              </p>
              <p style={{ color: "#B7B7B7" }}>
                Easiest way to get started. Plus, earn points for future stay.
              </p>
              <p style={{ color: "#B7B7B7" }}>
                Show me{" "}
                <a style={{ color: "#FFB70A" }} href="https://www.google.com/">
                  more
                </a>{" "}
              </p>
            </Col>
            <Col lg="4">
              <h2 className="text-white text-center" style={{ margin: "0px" }}>
                12 months
              </h2>
              <p className="text-center" style={{ color: "#B7B7B7" }}>
                1 year lease with the world
              </p>
              <p style={{ color: "#B7B7B7" }}>
                Live and work from upto 6 different countries in one year.
              </p>
              <p style={{ color: "#B7B7B7" }}>
                Premium concierge service with custom countries, boxes from
                home, and deep discounts for local adventures.
              </p>

              <p style={{ color: "#51BCDA", margin: "0px" }}>
                Plans starting $900/week.
              </p>
              <p style={{ color: "#B7B7B7" }}>
                Pay less rent as you go. Enjoy perks and kickbacks
              </p>
              <p style={{ color: "#B7B7B7" }}>
                Show me{" "}
                <a style={{ color: "#FFB70A" }} href="https://www.google.com/">
                  more
                </a>{" "}
              </p>
            </Col>
            <Col lg="4">
              <h2 className="text-white text-center" style={{ margin: "0px" }}>
                Multiple years
              </h2>
              <p className="text-center" style={{ color: "#B7B7B7" }}>
                Say goodbye to living in a box
              </p>
              <p style={{ color: "#B7B7B7" }}>
                Call this planet your home. Earn equity with every stay.
              </p>
              <p style={{ color: "#B7B7B7" }}>
                Platinum concierge services. Completely customizable plans.
                World class locations. Own the world.
              </p>

              <p style={{ color: "#51BCDA", margin: "0px" }}>
                Plans starting $800/week
              </p>
              <p style={{ color: "#B7B7B7" }}>
                Build financial freedom. Choose from premium locations.
              </p>
              <p style={{ color: "#B7B7B7" }}>
                How’s that{" "}
                <a style={{ color: "#FFB70A" }} href="https://www.google.com/">
                  possible
                </a>{" "}
              </p>
            </Col>
          </Row>
          <Row className="row-grid mb-5" style={{ justifyContent: "center" }}>
            <Button>Book Now</Button>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default OwnTheWorld;

import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  NavLink,
  Container,
  Row,
  Col,
  Spinner,
} from "reactstrap";
import { ReactComponent as GypsyLogoWhite } from "../../assets/img/brand/logo_white.svg";

// Core Components

function MobileFooter() {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  return (
    <>
      <footer
        className="footer footer-big "
        style={{ backgroundColor: "#025DD1" }}
      >
        <Container>
          <div className="content">
            <Row className="mb-3">
              <div className="column mx-auto d-flex align-items-center">
                <GypsyLogoWhite />
              </div>
            </Row>
            <Row className="mb-3">
              <div className="column mx-auto d-flex align-items-center">
                <h5 className="text-white">Own the World</h5>
              </div>
            </Row>
            <hr className="bg-light opacity-5"></hr>
            <Row className="justify-content-center">
              <div className="column mx-2">
                <Link to="/about">
                  <h4 className="mb-4 font-weight-500 text-light">
                    How it works
                  </h4>
                </Link>
              </div>
              <div className="column mx-2 ">
                <Link to="/security">
                  <h4 className="mb-4 font-weight-500 text-light">Support</h4>
                </Link>
              </div>
              <div className="column mx-2">
                <Link to="/mission">
                  <h4 className="mb-4 font-weight-500 text-light">Mission</h4>
                </Link>
              </div>
            </Row>
          </div>
          <div className="text-right d-flex justify-content-center pt-2 pr-">
            <ul className="social-buttons">
              <li>
                <Button
                  className="btn-icon rounded-circle mr-2"
                  color="instagram"
                  href="https://www.instagram.com/securemeeting/"
                  size="sm"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </Button>
              </li>
              <li>
                <Button
                  className="btn-icon rounded-circle mr-2"
                  color="twitter"
                  href="https://twitter.com/secure_meeting"
                  size="sm"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </Button>{" "}
              </li>
              <li>
                <Button
                  className="btn-icon rounded-circle mr-2"
                  color="white"
                  href="https://medium.com/securemeeting"
                  size="sm"
                  target="_blank"
                >
                  <i className="fab fa-medium-m"></i>
                </Button>
              </li>
              <li>
                <Button
                  className="btn-icon rounded-circle"
                  color="linkedin"
                  href="https://www.linkedin.com/company/securemeeting/"
                  size="sm"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </Button>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default MobileFooter;

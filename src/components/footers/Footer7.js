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

function LandingFooter() {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  return (
    <>
      <footer
        className="footer footer-big text-white"
        style={{ backgroundColor: "#025DD1" }}
      >
        <Container>
          <div className="content">
            <Row className="mb-2">
              <div className="column mx-auto d-flex align-items-center">
                <GypsyLogoWhite />
                <span> </span>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="column mx-auto d-flex align-items-center">
                <h5 className="text-white">Own the World</h5>
              </div>
            </Row>
            <Row>
              <Col md="2" xs="4">
                <div className="column">
                  <h4 className="mb-4 text-white">About</h4>
                  <ul className="links-vertical">
                    <Link to="/about">
                      <li>
                        <a className="text-white">How it works</a>
                      </li>
                    </Link>
                    <Link to="/support">
                      <li>
                        <a className="text-white">Support</a>
                      </li>
                    </Link>
                    <Link to="/mission">
                      <li>
                        <a className="text-white">Mission</a>
                      </li>
                    </Link>
                    <li>
                      <a
                        className="text-white"
                        href="https://medium.com/secure-meeting"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="2" xs="4">
                <div className="column">
                  <h4 className="mb-4 text-white">Community</h4>
                  <ul className="links-vertical">
                    <li>
                      <a
                        className="text-white"
                        href="https://www.linkedin.com/company/securemeeting/"
                        target="_blank"
                      >
                        Discord
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white"
                        href="https://medium.com/secure-meeting"
                        target="_blank"
                      >
                        Telegram
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="2" xs="4">
                <div className="column">
                  <h4 className="mb-4 text-white">Social</h4>
                  <ul className="links-vertical">
                    <li>
                      <a
                        className="text-white"
                        href="https://discord.gg/cj3kKj3T"
                        target="_blank"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white"
                        href="https://securemeeting-support.slack.com/"
                        target="_blank"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white"
                        href="https://t.me/+OzNJvSOwQPUzNzM5"
                        target="_blank"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="6">
                <div className="column">
                  <h4 className="mb-4 text-white">Newsletter</h4>
                  <ul className="links-vertical">
                    <p>
                      Stay tuned with weekly updates and recieve information
                      regarding our latest content!
                    </p>
                  </ul>
                  <Form
                    action=""
                    className="form form-newsletter row align-items-center flex-row px-2 justify-content-center"
                    method=""
                  >
                    <FormGroup className="col-md-8 m-0">
                      <Input
                        placeholder="Your Email"
                        type="email"
                        value={email}
                      ></Input>
                    </FormGroup>

                    <Button
                      color="secondary"
                      name="button"
                      type="button"
                      className="col-md-3"
                      style={{ top: 0, width: "50%" }}
                    >
                      Subscribe
                    </Button>
                  </Form>
                  <div>
                    <br />
                    {loading ? (
                      <div className="row justify-content-center align-items-center">
                        <Spinner size="sm" color="secondary" />{" "}
                      </div>
                    ) : null}
                    {error ? (
                      <h6 className="text-danger text-center w-100 ">
                        {error}
                      </h6>
                    ) : null}
                    {success ? (
                      <h6 className="text-success text-center w-100 ">
                        Successfully added to the mailing list!
                      </h6>
                    ) : null}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <hr className="bg-white opacity-3"></hr>
          <div className="row justify-content-center align-items-center ">
            <ul
              className="d-flex justify-content-center align-items-center pl-4 m-0"
              style={{ listStyle: "none" }}
            >
              <li>
                <NavLink
                  className="text-white"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Terms &amp; conditions
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Privacy policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Legal notice
                </NavLink>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default LandingFooter;

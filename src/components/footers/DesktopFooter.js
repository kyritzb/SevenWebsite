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

import { ReactComponent as Instagram } from "../../assets/img/icons/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/img/icons/linkedin.svg";
import { ReactComponent as Medium } from "../../assets/img/icons/medium.svg";
import { ReactComponent as Twitter } from "../../assets/img/icons/twitter.svg";
import { ReactComponent as Discord } from "../../assets/img/icons/discord.svg";

function LandingFooter() {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  return (
    <>
      <footer
        className="footer footer-big text-white"
        style={{ backgroundColor: "#000000" }}
      >
        <Container
          style={{
            marginRight: "0px",
            marginLeft: "0px",
            paddingLeft: "5vw",
            paddingRight: "5vw",
            width: "100%",
            position: "relative",
            maxWidth: "100%",
          }}
        >
          <Row>
            <Col>
              <h6 className="mb-4 text-grey">Gypsy, Inc. 2022</h6>
            </Col>
            <Col xs="6">
              <Row>
                <Col>
                  <h6 className="text-center text-grey-highlight">
                    <a
                      className="text-center text-grey-highlight"
                      href="mailto:hello@gypsy.city"
                    >
                      Contact
                    </a>
                  </h6>
                </Col>
                <Col>
                  <h6
                    onClick={() => window.open("https://docs.gypsy.city")}
                    className="text-center text-grey-highlight"
                  >
                    Crypto
                  </h6>
                </Col>
                <Col>
                  <h6
                    onClick={() => window.open("https://medium.com/gypsy")}
                    className="text-center text-grey-highlight"
                  >
                    Blog
                  </h6>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row style={{ justifyContent: "end" }}>
                <div>
                  <Twitter
                    onClick={() =>
                      window.open("https://twitter.com/gypsycityre")
                    }
                    className="text-grey-highlight"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                  />
                  <Discord
                    onClick={() =>
                      window.open("https://discord.com/invite/dzqasrgHNT")
                    }
                    className="text-grey-highlight"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                  />
                  <Linkedin
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/gypsycity/?viewAsMember=true"
                      )
                    }
                    className="text-grey-highlight"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                  />
                  <Medium
                    onClick={() => window.open("https://medium.com/gypsy")}
                    className="text-grey-highlight"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                  />
                  <Instagram
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/gypsycityofficial/"
                      )
                    }
                    className="text-grey-highlight"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "15px",
                      marginRight: "15px",
                    }}
                  />
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default LandingFooter;

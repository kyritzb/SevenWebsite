import React from "react";
import { useHistory } from "react-router-dom";

// reactstrap components
import { Container, Row, Col, Button, Input, Spinner } from "reactstrap";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Bowser from "bowser";
// Core Components
import Background from "assets/img/signup.png";

import { subscribeToEmailList } from "api";

const firstNameError = "Please provide your first name.";
const lastNameError = "Please provide your last name.";
const emailError = "Please provide a valid email.";
const numberError = "Please provide a valid phone number.";
const linkedinError = "Please provide a valid Linkedin url.";

function Index() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [device, setDevice] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [linkedin, setLinkedin] = React.useState("");
  const [signedUp, setSignedUp] = React.useState(false);

  const getDevice = () => {
    return Bowser.getParser(window.navigator.userAgent).getPlatformType();
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function getFormattedPhoneNum(input) {
    let output = "(";
    input.replace(
      /^\D*(\d{0,3})\D*(\d{0,3})\D*(\d{0,4})/,
      function (match, g1, g2, g3) {
        if (g1.length) {
          output += g1;
          if (g1.length == 3) {
            output += ")";
            if (g2.length) {
              output += " " + g2;
              if (g2.length == 3) {
                output += "-";
                if (g3.length) {
                  output += g3;
                }
              }
            }
          }
        }
      }
    );
    return output;
  }

  function isValidHttpUrl(string) {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }

  React.useEffect(() => {
    setDevice(getDevice());
  }, [getDevice]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  async function requestSubscribe(
    firstName,
    lastName,
    email,
    number,
    linkedIn
  ) {
    return await subscribeToEmailList(
      firstName,
      lastName,
      email,
      number,
      linkedIn
    );
  }

  function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
  }

  async function submit() {
    let curFirstName = firstName.trim().toLowerCase();
    let curLastName = lastName.trim().toLowerCase();
    let curEmail = email.trim().toLowerCase();
    let curNumber = number.trim().toLowerCase();
    let curLinkedin = linkedin.trim().toLowerCase();

    setLoading(true);
    setError("");
    if (curFirstName.length === 0) {
      setError(firstNameError);
    } else if (curLastName.trim().length === 0) {
      setError(lastNameError);
    } else if (curEmail.length === 0 || !validateEmail(curEmail)) {
      setError(emailError);
    } else if (curNumber.length != 14) {
      setError(numberError);
    } else if (curLinkedin.length === 0 || !isValidHttpUrl(curLinkedin)) {
      setError(linkedinError);
    } else {
      let res = await requestSubscribe(
        curFirstName,
        curLastName,
        curEmail,
        curNumber,
        curLinkedin
      );
      if (!res.isSuccess) {
        if (res.errorName) {
          setError(res.errorName);
        } else {
          setError("An error occured.");
        }
      } else {
        setSignedUp(true);
      }
    }
    setLoading(false);
  }
  return (
    <>
      <div className="wrapper" style={{ maxWidth: "100vw" }}>
        <div
          className="signup-view"
          style={{
            position: "absolute",
            right: "0px",
            width: "100vw",
            height: "100vh",
            backgroundColor: "white",
          }}
        >
          <div
            className="picture"
            style={{
              width: "100vw",
              height: "30vh",
              backgroundImage: `url(${Background})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          ></div>
          <Container
            style={{
              padding: "20px 40px",
              backgroundColor: "white",
            }}
          >
            {signedUp ? (
              <>
                <Row style={{ justifyContent: "start", marginBottom: "40px" }}>
                  <h1>Gypsy</h1>
                </Row>
                <Row style={{ justifyContent: "start", marginBottom: "20px" }}>
                  <h3>Welcome, {titleCase(firstName)}</h3>
                </Row>
                <Row>
                  <h6>
                    You will recieve a confirmation email shortly verifying we
                    recieved your details.
                  </h6>
                  <p>Become a global citizen for an year. Or a lifetime.</p>
                </Row>
              </>
            ) : (
              <>
                <Row style={{ justifyContent: "start" }}>
                  <h1>Gypsy</h1>
                </Row>
                <Row style={{ justifyContent: "start" }}>
                  <p>Gypsy lets you travel the world like we were meant to.</p>
                </Row>
                <Row style={{ justifyContent: "start" }}>
                  <div>
                    <p>
                      Please enter your full legal name. Your legal name should
                      match any form of government ID.
                    </p>
                    <Row style={{ marginBottom: "20px" }}>
                      <Col>
                        <Input
                          invalid={error == firstNameError}
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          name="FirstName"
                          id="firstName"
                          placeholder="First name"
                        />
                      </Col>
                      <Col>
                        <Input
                          invalid={error == lastNameError}
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          name="LastName"
                          id="lastName"
                          placeholder="Last name"
                        />
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: "20px" }}>
                      <Col>
                        <Input
                          invalid={error == emailError}
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: "20px" }}>
                      <Col>
                        <Input
                          invalid={error == numberError}
                          value={number}
                          onChange={(e) =>
                            setNumber(getFormattedPhoneNum(e.target.value))
                          }
                          name="phone"
                          id="phone"
                          placeholder="(999) 999-9999"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Input
                          invalid={error == linkedinError}
                          value={linkedin}
                          onChange={(e) => setLinkedin(e.target.value)}
                          name="linkedin"
                          id="linkedin"
                          placeholder="LinkedIn url"
                        />
                      </Col>
                    </Row>
                  </div>
                </Row>
                <Row style={{ width: "100%" }}>
                  <p
                    className="text-center"
                    style={{ color: "red", width: "100%" }}
                  >
                    {error}
                  </p>
                </Row>
                <Row>
                  <Button disabled={loading} color="secondary" onClick={submit}>
                    {"Count me in "}
                    {loading ? <Spinner size="sm" /> : null}
                  </Button>
                </Row>
              </>
            )}
          </Container>
        </div>
      </div>
    </>
  );
}

export default Index;

import React from "react";

// reactstrap components
import { Button, Modal, Row, Col, Container } from "reactstrap";

import MetaMask from "../../assets/img/icons/metamask.png";
import WalletConnect from "../../assets/img/icons/walletconnect.png";
import { useHistory } from "react-router-dom";
// Core Components

function ModalDefault() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [metaMaskHovered, setMetaMaskHovered] = React.useState(false);
  const [walletConnectHovered, setWalletConnectHovered] = React.useState(false);

  const history = useHistory();
  function goToAccount() {
    history.push("/account");
  }

  function metaMaskConnect() {
    console.log("metamask clicked");
    setModalOpen(false);
    goToAccount();
  }

  function walletConnectConnect() {
    console.log("walletConnect clicked");
    setModalOpen(false);
    goToAccount();
  }
  return (
    <>
      <Button
        color="secondary"
        className="btn-icon mb-3 mb-sm-0"
        onClick={() => setModalOpen(!modalOpen)}
      >
        <span className="btn-inner--icon">
          <i className="fas fa-wallet"></i>
        </span>
        <span className="btn-inner--text">Connect Wallet</span>
      </Button>
      <Modal
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
        className="modal-dialog-centered"
      >
        <div className="modal-body" style={{ padding: "0px !important" }}>
          <Container
            className="mt-2"
            onMouseOver={() => setMetaMaskHovered(true)}
            onMouseOut={() => setMetaMaskHovered(false)}
            onClick={metaMaskConnect}
            style={{
              backgroundColor: metaMaskHovered ? "#e9e9e9" : "white",
              cursor: "pointer",
            }}
          >
            <Row className="align-items-center justify-content-center">
              <Col className="text-center" lg="12">
                <img src={MetaMask} style={{ width: "75px", height: "75px" }} />
              </Col>
            </Row>
            <Row className="align-items-center justify-content-center">
              <Col className="text-center" lg="12">
                <h2>MetaMask</h2>
              </Col>
            </Row>
            <Row className="align-items-center justify-content-center">
              <Col className="text-center" lg="12">
                <p>Connect to your MetaMask Wallet</p>
              </Col>
            </Row>
          </Container>
          <hr
            style={{
              color: "#c4c4c4",
              backgroundColor: "#c4c4c4",
              height: 2,
              width: "100%",
            }}
          />
          <Container
            onMouseOver={() => setWalletConnectHovered(true)}
            onMouseOut={() => setWalletConnectHovered(false)}
            onClick={walletConnectConnect}
            style={{
              backgroundColor: walletConnectHovered ? "#e9e9e9" : "white",
              cursor: "pointer",
            }}
          >
            <Row className="align-items-center justify-content-center">
              <Col className="text-center" lg="12">
                <img
                  src={WalletConnect}
                  style={{ width: "75px", height: "75px" }}
                />
              </Col>
            </Row>
            <Row className="align-items-center justify-content-center">
              <Col className="text-center" lg="12">
                <h2>WalletConnect</h2>
              </Col>
            </Row>
            <Row className="align-items-center justify-content-center">
              <Col className="text-center" lg="12">
                <p>Scan with WalletConnect to connect</p>
              </Col>
            </Row>
          </Container>
        </div>
      </Modal>
    </>
  );
}

export default ModalDefault;

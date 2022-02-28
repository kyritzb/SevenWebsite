import React, { useEffect, useState } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Web3 from "web3";
// Core Components
import one from "assets/img/seven/one.jpg";

const web3 = new Web3(
  "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
);
const sevenNftAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "mintCat",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const sevenNft = new web3.eth.Contract(
  sevenNftAbi,
  "0x3D7AB231A5071EA6779602f89916d98745B96784"
);

function Index() {
  const [nfts, setNfts] = useState([]);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  async function loadNfts() {
    let arr = [];

    let count = await sevenNft.methods.count().call(function (err, res) {
      if (err) {
        console.error("error getting count:", err);
        return 0;
      } else {
        return res;
      }
    });

    for (let i = 0; i < count; i++) {
      let cur = i + 1;
      let owner = await sevenNft.methods.ownerOf(cur).call(function (err, res) {
        if (err) {
          console.error(err);
        } else {
          return res;
        }
      });

      let uri = await sevenNft.methods.tokenURI(cur).call(function (err, res) {
        if (err) {
          console.error(err);
        } else {
          return res;
        }
      });
      let obj = { owner: owner, uri: uri };
      arr.push(obj);
    }

    console.log("setting nfts:", arr);
    setNfts(arr);
  }

  useEffect(() => {
    loadNfts();
  }, []);

  return (
    <>
      <div
        className="wrapper"
        style={{ maxWidth: "100vw", paddingTop: "50px" }}
      >
        <Container>
          <Row style={{ alignItems: "center", justifyContent: "center" }}>
            <img
              src={one}
              style={{ width: "100px", height: "100px", marginBottom: "50px" }}
            />
          </Row>
          <Row style={{ alignItems: "center", justifyContent: "center" }}>
            <h3 className="text-white text-center">Welcome to</h3>
          </Row>
          <Row style={{ alignItems: "center", justifyContent: "center" }}>
            <h1 className="text-white text-center"> Seven NFT collection</h1>
          </Row>
          <Row style={{ alignItems: "center", justifyContent: "center" }}>
            <p className="text-white text-center">
              Token Address:0x3D7AB231A5071EA6779602f89916d98745B96784
            </p>
          </Row>
          <Row style={{ alignItems: "center", justifyContent: "center" }}>
            <p className="text-white text-center" style={{ width: "50%" }}>
              Seven NFT collection is a collection of images of seven. Buy a
              seven and hold it with pride cause its not worth anything. Our new
              proof of cuteness concensus method ensures each seven is backed by
              cuteness that can't decrease.
            </p>
          </Row>
          <Row style={{ alignItems: "center", justifyContent: "center" }}>
            <h3 className="text-white text-center">Already Minted</h3>
          </Row>
        </Container>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          paddingLeft: "10vw",
          paddingRight: "10vw",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {nfts.map((nft) => {
          console.log("loading:", nft);
          return (
            <img src={nft.uri} style={{ width: "200px", margin: "20px" }} />
          );
        })}
      </div>
    </>
  );
}

export default Index;

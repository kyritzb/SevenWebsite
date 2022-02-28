import React, { useState, useEffect } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import { useWindowSize } from "react-use";
// Core Components
import Bowser from "bowser";

function Index() {
  const [vidWidth, setVidWidth] = useState("0px");
  const [vidHeight, setVidHeight] = useState("0px");
  const [device, setDevice] = React.useState("");
  const { width, height } = useWindowSize();

  const getDevice = () => {
    return Bowser.getParser(window.navigator.userAgent).getPlatformType();
  };

  useEffect(() => {
    let device2 = getDevice();
    if (device2 == "desktop") {
      setVidWidth(width * 0.75);
      setVidHeight(height * 0.75);
    } else {
      setVidWidth(width * 1.0);
      setVidHeight(height * 1.0);
    }
  }, [width, height]);

  React.useEffect(() => {
    setDevice(getDevice());
  }, [getDevice]);

  return (
    <iframe
      src="https://player.vimeo.com/video/674883210?h=cbf1725a50"
      width={vidWidth}
      height={vidHeight}
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      style={{
        position: "absolute",
        left: device == "mobile" ? "0px" : "12.5%",
        top: device == "mobile" ? "0px" : "8%",
      }}
    ></iframe>
  );
}

export default Index;

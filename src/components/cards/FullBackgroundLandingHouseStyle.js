import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle } from "reactstrap";

// Core Components

function FullBackgroundLandingHouseStyle({ image, type, results }) {
  return (
    <>
      <Card className="card-blog card-background" data-animation={true}>
        <div
          className="full-background"
          style={{
            backgroundImage: "url(" + image + ")",
          }}
        ></div>
        <CardBody>
          <div className="content-bottom">
            <CardTitle tag="h5">{type}</CardTitle>
            <p className="card-category text-white">
              View {results} {type}
            </p>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default FullBackgroundLandingHouseStyle;

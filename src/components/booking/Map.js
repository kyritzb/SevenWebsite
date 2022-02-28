import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia3lyaXR6YiIsImEiOiJja3QyMTl2NTYwa3dxMnZxb2hsdHU3Y2wzIn0.baCC6r6kCtj9JHY5xvXO7Q";

function NodeMap({ height }) {
  const mapContainerRef = useRef(null);
  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.03236, 40.74399],
      zoom: 13,
    });

    return () => map.remove();
  }, []);

  return (
    <>
      <div
        style={{ height: height + "vh", width: "100%" }}
        className="map-container"
        ref={mapContainerRef}
      />
    </>
  );
}

export default NodeMap;

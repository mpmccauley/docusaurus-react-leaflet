import React, { useEffect, lazy, Suspense } from "react";
import Layout from "@theme/Layout";

import "leaflet/dist/leaflet.css";
import BrowserOnly from "@docusaurus/BrowserOnly";

// import MapComponent from "../components/MapComponent";
const MapComponent = lazy(() => import("../components/MapComponent"));

import greenIcon from "./green-icon.png";

const Map = () => {
  let DefaultIcon;

  useEffect(() => {
    const L = require("leaflet");

    DefaultIcon = new L.Icon({
      iconUrl: greenIcon,
      iconSize: [30, 30],
      iconAnchor: [30 / 2, 30],
    });
  }, []);

  return (
    <Layout>
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => (
          <Suspense fallback={<div>Loading...</div>}>
            <MapComponent DefaultIcon={DefaultIcon} />
          </Suspense>
        )}
      </BrowserOnly>
    </Layout>
  );
};
export default Map;

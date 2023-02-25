import React from "react";
import styles from "./MapComponent.module.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const mapCenter = [40.11635352897009, -96.86788574159569];
const pins = require("../../../static/pins.json");

const MapComponent = ({ DefaultIcon }) => {
  return (
    <div className="mapPageWrapper">
      <div className={styles.mapWrapper}>
        <MapContainer
          className={styles.mapContainer}
          center={mapCenter}
          zoom={4}
        >
          <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
          {pins.map((pin) => (
            <Marker
              key={pin.id}
              position={[pin.latitude, pin.longitude]}
              icon={DefaultIcon}
            >
              <Popup offset={[0, -35]}>
                <h3>{pin.location}</h3>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;

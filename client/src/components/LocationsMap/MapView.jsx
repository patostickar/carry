import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import icon from "../../assets/Location_icon.svg";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

function MapFunction(props) {
  const map = useMap();
  props.actual?.geo && map.flyTo(props.actual.geo, 15);
  // map.setZoom(10)
}

export default function MapView() {
  const { location } = useSelector((state) => state.searchBar);
  const [actual, setActual] = useState(location);
  const markers = [location];

  useEffect(() => {
    setActual(location);
  }, [location]);

  const LocationIcon = L.icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon",
  });

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapContainer
        center={location?.geo || [-34.55854950674014, -58.417534309492424]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        />
        {markers?.map((location, i) => (
          <>
            {location && (
              <Marker
                key={i}
                position={[location?.geo[0] || 0, location?.geo[1] || 0]}
                icon={LocationIcon}
              >
                <MapFunction actual={actual} />
                <Popup>
                  <div>{location?.name}</div>
                </Popup>
              </Marker>
            )}
          </>
        ))}
      </MapContainer>
    </div>
  );
}

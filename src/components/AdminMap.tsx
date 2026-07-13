"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons in React-Leaflet
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const LOCATIONS = [
  { id: "WX-1042", name: "Resto Ulee Lheue", lat: 5.560, lng: 95.295 },
  { id: "WX-1041", name: "Seafood Lampulo", lat: 5.578, lng: 95.319 },
  { id: "WX-1040", name: "Warung Peunayong", lat: 5.558, lng: 95.318 },
  { id: "WX-1039", name: "Resto Pantai Cermin", lat: 5.568, lng: 95.340 },
];

export default function AdminMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ height: 300, width: "100%", background: "var(--color-bg-card)", borderRadius: "var(--radius-md)" }} />;
  }

  return (
    <div style={{ height: 300, width: "100%", borderRadius: "var(--radius-md)", overflow: "hidden", zIndex: 0, position: "relative" }}>
      <MapContainer center={[5.558, 95.318]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {LOCATIONS.map((loc) => (
          <Marker key={loc.id} position={[loc.lat, loc.lng]}>
            <Popup>
              <strong>{loc.name}</strong> <br />
              ID: {loc.id}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

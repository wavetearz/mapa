import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function App() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/points")
      .then((res) => res.json())
      .then((data) => setPoints(data));
  }, []);

  return (
    <div id="map">
      <MapContainer center={[0, 0]} zoom={3} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {points.map((point) => (
          <Marker key={point._id} position={[point.lat, point.lng]} icon={markerIcon}>
            <Popup>
              <b>Opis:</b> {point.description || "no desc"}<br />
              <b>Lat:</b> {point.lat}<br />
              <b>Lng:</b> {point.lng}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

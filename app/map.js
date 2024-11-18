import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/layers-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const FullScreenMap = ({ cities }) => {
  const center = [cities[0]?.lat || 0, cities[0]?.lng || 0]; // Varsayılan olarak ilk şehri merkeze alır

  return (
    <div style={{ width: "100vw", height: "100vh" }}> {/* Tüm ekranı kaplayan div */}
      <MapContainer
        center={center}
        zoom={8}
        style={{ width: "100%", height: "100%" }} // Harita bileşeninin boyutunu ayarlar
      >
        {/* OpenStreetMap veya başka bir tile layer kullanabilirsiniz */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Şehir markerlarını döngüyle ekliyoruz */}
        {cities.map((city, index) => (
          <Marker
            key={index}
            position={[city.lat, city.lng]}
          >
            <Popup>{city.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default FullScreenMap;

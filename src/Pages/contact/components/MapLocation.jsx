import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
// Fix marker icon issue in Leaflet
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
const defaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = defaultIcon;
const locations = [
  {
    id: 1,
    name: "Dhaka",
    position: [23.8103, 90.4125],
    description: "Capital of Bangladesh",
  },
  {
    id: 2,
    name: "Chittagong",
    position: [22.3569, 91.7832],
    description: "Port city of Bangladesh",
  },
  {
    id: 3,
    name: "Sylhet",
    position: [24.8949, 91.8687],
    description: "Famous for tea gardens",
  },
];

const MapLocation = () => {
  return (
    <div className="w-full h-[500px] rounded-lg shadow-lg overflow-hidden">
      <MapContainer
        center={[23.8103, 90.4125]} // Dhaka, Bangladesh
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[23.8103, 90.4125]}>
          <Popup>
            Dhaka City <br /> Capital of Bangladesh
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapLocation;

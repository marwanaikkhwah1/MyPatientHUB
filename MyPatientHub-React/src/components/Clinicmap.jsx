import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function ClinicMap() {
  useEffect(() => {
    const map = L.map("clinic-map").setView(
      [34.5553, 69.2075],
      12
    );

    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: "&copy; OpenStreetMap contributors",
      }
    ).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div id="clinic-map"></div>;
}

export default ClinicMap;
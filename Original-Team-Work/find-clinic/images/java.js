// Find Clinic - Map
const map = L.map("clinic-map").setView([34.5553, 69.2075], 12);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap contributors" }).addTo(map);
// Map button const mapButton = document.querySelector( ".map-type-buttons button:nth-child(1)" );
// Satellite button const satelliteButton = document.querySelector( ".map-type-buttons button:nth-child(2)" );
// Map layer const mapLayer = L.tileLayer( "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap contributors" } );
// Satellite layer const satelliteLayer = L.tileLayer( "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", { attribution: "Tiles © Esri" } );
// Map button click mapButton.addEventListener("click", function () {
map.removeLayer(satelliteLayer);

if (!map.hasLayer(mapLayer)) {
    map.addLayer(mapLayer);
}

mapButton.classList.add("active");
satelliteButton.classList.remove("active");
});
// Satellite button click satelliteButton.addEventListener("click", function () {
map.removeLayer(mapLayer);

if (!map.hasLayer(satelliteLayer)) {
    map.addLayer(satelliteLayer);
}

satelliteButton.classList.add("active");
mapButton.classList.remove("active");
});
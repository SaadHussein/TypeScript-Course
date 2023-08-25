const form = document.querySelector("form")! as HTMLFormElement;
const latitudeInput = document.getElementById("latitude")! as HTMLInputElement;
const langitudeInput = document.getElementById(
  "langitude"
)! as HTMLInputElement;

var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const latitudeAddress = +latitudeInput.value;
  const langitudeAddress = +langitudeInput.value;

  map.setView([latitudeAddress, langitudeAddress], 10);
  L.marker([latitudeAddress, langitudeAddress])
    .addTo(map)
    .bindPopup("The Address you search about.")
    .openPopup();
}

form.addEventListener("submit", searchAddressHandler);

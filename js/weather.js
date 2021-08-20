const API_KEY = "90db341ddbf8968bc3f39dff6ea0c327";

function onGeonOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((date) => {
      console.log(data.name, data.weather[0].main);
    });
}
function onGeonError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeonOk, onGeonError);

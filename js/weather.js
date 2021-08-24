const API_KEY = "90db341ddbf8968bc3f39dff6ea0c327";

function onGeonOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = Math.round(data.main.temp * 10) / 10;
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = `${data.sys.country} ${data.name}`;
      weather.innerText = `${data.weather[0].main} ${temperature}℃`;
    });
}
function onGeonError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeonOk, onGeonError);

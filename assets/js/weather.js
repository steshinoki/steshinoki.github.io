document.addEventListener("DOMContentLoaded", () => {
  const weatherInfo = document.getElementById("weather-info");
  const weatherSection = document.getElementById("weather");

  if (weatherInfo && weatherSection) {
    const nickname = weatherSection.dataset.nickname;
    const location = weatherSection.dataset.location;
    const apiKey = weatherSection.dataset.weatherapikey;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    async function fetchWeather() {
      try {
        const response = await fetch(url);
        const data = await response.json();

        const condition = data.current.condition.text.toLowerCase();
        const weatherConditions = {
          rain: "raining 🌧️",
          cloud: "cloudy ☁️",
          sunny: "sunny ☀️",
          snow: "snowy ❄️",
          clear: "clear 🌟"
        };

        let weatherMessage = `It's currently ${condition} in ${nickname}'s house.`;

        for (const [key, value] of Object.entries(weatherConditions)) {
          if (condition.includes(key)) {
            weatherMessage = `It's currently ${value} in ${nickname}'s house.`;
            break;
          }
        }

        weatherInfo.innerHTML = weatherMessage;
      } catch (error) {
        console.error("Error fetching weather data:", error);
        weatherSection.style.display = "none";
      }
    }

    fetchWeather();
  }
});

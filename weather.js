const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
    // use website api open weather
    const api_key = "509156e28c1e8a80de8dd5417ce3eab3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    
    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";


    temperature.innerHTML = `${Math.round(weather_data.main.temperature - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML = `${weather_data.wind.speed}Km/Hr`;

    switch(weather_data.weather[0].main){
        case 'clouds':
            weather_img.src="weather_img/claud_sun.png";
            break;
        case 'clear':
            weather_img.src="weather_img/sun.png";
            break;
        case 'rain':
            weather_img.src="weather_img/rain.png";
            break;
        case 'mist':
            weather_img.src="weather_img/sun_rain.png";
            break;
        case 'snow':
            weather_img.src="weather_img/ice_rain.png";
            break;                   
    }
}

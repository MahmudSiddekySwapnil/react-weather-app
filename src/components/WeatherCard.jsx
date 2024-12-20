import React from "react";

function WeatherCard({ weather }) {
    if (!weather) return null;

    return (
        <div className="weather-card">
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <p>🌡️ Temperature: {weather.main.temp}°C</p>
            <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
        </div>
    );
}

export default WeatherCard;

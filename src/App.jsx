import { useState } from "react";
import { getWeatherByCity } from "./api";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";

function App() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (city) => {
        setLoading(true);
        setError("");
        try {
            const data = await getWeatherByCity(city);
            if (data.cod === 200) {
                setWeather(data);
            } else {
                setError(data.message || "City not found");
            }
        } catch (err) {
            setError("Error fetching weather data.");
        }
        setLoading(false);
    };

    return (
        <div className="App">
            <h1>Weather App</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <WeatherCard weather={weather} />
        </div>
    );
}

export default App;

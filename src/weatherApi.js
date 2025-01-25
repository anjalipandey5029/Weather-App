const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "5f8df2a057de9fedca97b1005494b540";

export async function fetchWeatherData(city) {
    try {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const jsonResponse = await response.json();
        const result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log("Processed Weather Data:", result);
        return result;
    } catch (err) {
        console.error("Error fetching weather data:", err);
        throw err; 
    }
}

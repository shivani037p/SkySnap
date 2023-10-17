document.addEventListener('DOMContentLoaded', function() {
    const weatherInfo = document.getElementById('weatherInfo');
    const getWeatherButton = document.getElementById('getWeather');
    const apiKey = 'YOUR_WEATHERSTACK_API_KEY';  // Replace with your Weatherstack API key

    getWeatherButton.addEventListener('click', function() {
        const cityInput = document.getElementById('cityInput').value;

        // Build the Weatherstack API URL
        const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${cityInput}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    // Handle API error messages
                    weatherInfo.innerHTML = data.error.info;
                } else {
                    const temperature = data.current.temperature;
                    const weatherDescription = data.current.weather_descriptions[0];

                    // Display weather information
                    weatherInfo.innerHTML = `Temperature: ${temperature}°C<br>Weather: ${weatherDescription}`;
                }
            })
            .catch(error => {
                // Handle network or other errors
                weatherInfo.innerHTML = 'An error occurred. Please try again later.';
            });
    });
});

import { React, useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});
  const [forecast, setForecast] = useState([]);
  const url = "https://api.weatherapi.com/v1/forecast.json?key=e5eb030fbe61458397065456241302&q=cartersville, GA&days=6&aqi=no&alerts=no";

  useEffect(() => {
    axios.get(url).then((response) => {
      setWeather(response.data.current);
      setLocation(response.data.location);
      setForecast(response.data.forecast.forecastday);
      console.log(response.data)
    });
  }, [url]);

  return (
    <>
      {weather && location && forecast ? (
        <>
          <div className="weather-widget" data-time={weather.is_day}>
            <img src="/global-images/bartow-courthouse.webp" alt="Bartow Courthouse" style={{zIndex: '0', opacity: '.1', position: 'absolute', top: '0', right: '-40px', width: '-webkit-fill-available'}}/>
            <div className="section-1">
              <div>
                <p style={{marginTop: '0'}}>{location.name}, GA</p>
                <h2 style={{ fontSize: "40px", margin: "0", fontWeight: "bold" }}>{weather.temp_f}°F</h2>
              </div>

              {weather.condition ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img src={`https:`+ weather.condition.icon} alt={weather.condition.text} style={{ width: "64px" }} />
                  <p style={{ margin: "0" }}>{weather.condition.text}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="section-2">
              {forecast.map((day) => {
                return (
                  <div className="forecast-day" key={day.date}>
                    <p style={{opacity: '.6', margin: '0'}}>{new Date(day.date).toLocaleDateString("en-us",{ weekday: "long", timeZone: "UTC" }).substring(0, 3)}</p>
                    <img src={`https:`+ day.day.condition.icon} alt={day.day.condition.text} style={{ width: "32px" }}/>
                    <p style={{margin: '0'}}>{day.day.maxtemp_f.toFixed(0)} F</p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <p>no weather</p>
      )}
    </>
  );
};

export default Weather;

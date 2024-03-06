import { React, useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});
  const url = "https://api.weatherapi.com/v1/current.json?key=e5eb030fbe61458397065456241302&q=30121&aqi=no";

  useEffect(() => {
    axios.get(url).then((response) => {
      setWeather(response.data.current);
      setLocation(response.data.location); 
    });
  }, [url]);

  return (
    <>
      {weather && location ? (
        <>
          <div className="weather-widget" data-time={weather.is_day}>
            <img src="/global-images/bartow-courthouse.webp" alt="Bartow Courthouse" style={{zIndex: '0', opacity: '.1', position: 'absolute', top: '-40px', right: '-100px', width: '-webkit-fill-available'}}/>
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
          </div>
        </>
      ) : (
        <p>no weather</p>
      )}
    </>
  );
};

export default Weather;

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
          <div className="weather-widget">
            <div className="section-1">
              {weather.condition ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img src={`https:` + weather.condition.icon} alt={weather.condition.text} style={{ width: "48px" }} />
                </div>
              ) : (
                <></>
              )}
              <div>
                <p style={{ fontSize: "16px", margin: "0", color: 'white' }}>{weather.temp_f} °F</p>
              </div>
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

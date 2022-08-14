import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";


const weatherComponent = () => {
  const [lat, setLat] = useState([]);
  const [lng, setLng] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLat(pos.coords.latitude);
        setLng(pos.coords.longitude);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f1a6a9f4b1cca85753aa1d87e71cba3a`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, lng]);

  return (
    <>
      Weather and News
      {typeof data.main != "undefined" ? <Weather data={data} /> : <div></div>}
    </>
  );
};

const App = () => {
  return (
    <><h1>
      React Project
    </h1>
    <weatherComponent />
    </>
  )
}


export default App;

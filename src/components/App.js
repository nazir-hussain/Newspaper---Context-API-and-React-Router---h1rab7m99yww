// import React, {Component, useState,useEffect} from "react";
// import Weatherinfo from "./Weatherinfo";
// import '../styles/App.css';

// const App = () => {
//   const [searchValue, setSearchValue] = useState("Delhi");
//   const [tempInfo, setTempInfo] = useState({});

//   const getWeatherInfo = async () => {
//     try{
//       let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=4721875125989469f55f6f67bccf42ac`

//       const res = await fetch(url);
//       const data = await res.json();

//       const { temp} = data.main;
//       const { main: weathermood } = data.weather[0];
//       const {name} = data;
//       const {country} = data.sys;

//         const myNewWeatherInfo = {
//           temp,
//           weathermood,
//           name,
//           country,
//         };

//         setTempInfo(myNewWeatherInfo);
//     } catch(error){
//       alert("City not Found ");
//       setSearchValue("");
//       //console.log(error);
//     }
//    };

//   useEffect(() => {
//     getWeatherInfo();
//   },[]);
//   return (
//     <>
//     <div className="wrap">
//         <div className="search">
//             <input type="search"
//             placeholder='search...' autoFocus
//             id='search'
//             className='searchTerm' 
//             value={ searchValue} onChange={(e)=>setSearchValue(e.target.value)}  />
//           <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
//         </div>
//     </div>
   
//       <Weatherinfo tempInfo={tempInfo}/>
//     </>
//   )
// }


// export default App;


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

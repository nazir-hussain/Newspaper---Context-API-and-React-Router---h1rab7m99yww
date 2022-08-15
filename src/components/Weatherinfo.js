import React, {useEffect} from 'react'

const Weatherinfo = ({tempInfo}) => {
    const [weatherState, setWeatherState] = React.useState("");
    const{
        temp,
        weathermood,
        name,
        country,
      } = tempInfo;

      useEffect(() =>{
          if(weathermood){
              switch(weathermood){
                  case "Clouds": setWeatherState("wi-day-cloudy");
                  break;
                  case "Haze": setWeatherState("wi-fog");
                  break;
                  case "Clear": setWeatherState("wi-day-sunny");
                  break;
                  case "Mist": setWeatherState("wi-dust");
                  break;
                  case "Rain": setWeatherState("wi-rain");
                  break;
                  default:
                      setWeatherState("wi-day-sunny");
                      break;
              }
          }
      },[weathermood])
      
     
  return (
    <>
     {/*our temp card*/}
     <article className='widget'>
      <div className='weatherIcon'>
      <i className={`wi ${weatherState}`}></i>
        </div>

      <div className='weatherInfo'>
        <div className='temperature'>
          <span>{Math.round(temp)}&deg;</span>
        </div>

        <div className='description'>
          <div className='weatherCondition'>{weathermood}</div>
          <div className='place'>{name}, {country}</div>
        </div>
      </div>
      <div className='date'> {new Date().toDateString()} </div>

       
       
    </article>
      
    </>
  )
}

export default Weatherinfo

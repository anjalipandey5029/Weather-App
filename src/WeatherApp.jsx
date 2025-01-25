import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
import './WeatherApp.css';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
            city: "WonderLand",
            feelslike: 23.78,
            temp: 24.52,
            tempMax: 24.52,
            tempMin: 24.52,
            humidity: 29,
            weather: "clear-sky",
    
    })

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div className='weather'>
            <h2>Weather App </h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
import { fetchWeatherData } from './weatherApi';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let handleChange = (evt)=>{
        setCity(evt.target.value)
    };

    let handleSubmit = async(evt)=>{
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
          let newInfo = await fetchWeatherData(city);
          updateInfo(newInfo);
          setError(false);
        }
        catch(err) {
            setError(true);
            setTimeout(() => {
                setError(false);
              }, 2000);
        }
        
    } 
    return(
        <div className='SearchBox'>
    
    <form onSubmit={handleSubmit}>
    <TextField className = "search"id="city" label="City Name" variant="outlined"value = {city} onChange={handleChange} required />
    <br></br>
    <br></br>
    <Button variant="contained"type="submit"  onChange={handleChange}>Search</Button>
    {error && <p style = {{color : "red"}}>No such place exists!</p>}
    </form>
    </div>
    )
}
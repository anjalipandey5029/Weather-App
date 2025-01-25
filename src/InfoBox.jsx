import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; 
import AcUnitIcon from '@mui/icons-material/AcUnit'; 
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1733164845602-68d7347909e0?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

   const HOT_URL = "https://images.unsplash.com/photo-1553586635-60aba8bfda8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
   const COLD_URL ="https://media.istockphoto.com/id/1584485279/photo/sunrise-in-chiang-dao-national-park.jpg?s=612x612&w=0&k=20&c=Bi9ePlnU_3vcfX4kq9MeB56YmxrxOKsQbNSTWdWmLvM=";
   const RAIN_URL = "https://media.istockphoto.com/id/1322717990/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.webp?a=1&b=1&s=612x612&w=0&k=20&c=W2-dXNrzqf1Lgo-xL5UYWsvM3q9EzqqpOCWhgC_cklk=";

   const weatherDetails = info.humidity > 80 ? { image: RAIN_URL, icon: <ThunderstormIcon fontSize="large" color="primary" /> }
   : info.temp > 15
       ? { image: HOT_URL, icon: <WbSunnyIcon fontSize="large" color="warning" /> }
       : { image: COLD_URL, icon: <AcUnitIcon fontSize="large" color="info" /> };
   
   
   return (
        <div className="InfoBox">
        
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140, objectFit: 'cover' }} 
                        image={weatherDetails.image }
                        title="Weather Image"
                    />
                    <CardContent>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '70px' }}>
                          
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city}
                            </Typography>
                            {weatherDetails.icon}
                        </div>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
    
                            <div style={{fontWeight: 'bold'}}>Temperature = {info.temp}&deg;C</div>
                            <div style={{fontWeight: 'bold'}}>Humidity = {info.humidity}</div>
                            <div style={{fontWeight: 'bold'}}>Min Temp = {info.tempMin}</div>
                            <div style={{fontWeight: 'bold'}}>Max Temp = {info.tempMax}</div>
                            <p style={{fontWeight: 'bold'}}>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                            
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

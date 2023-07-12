import { useState } from "react";

export default function WeatherAPI() {
  const [temperature, setTemperature] = useState("");
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");
  const [isGoodWeather, setIsGoodWeather] = useState(true);

  useEffect(() => {
    async function loadWeatherTemperature(){
        try{
            const response = await fetch ("https://example-apis.vercel.app/api/weather");

            const data = await response.json();
            console.log("data", data);
            setTemperature({data.temperature.value})
            setLocation({data.location.value})
            setCondition({data.condition.value})
            setIsGoodWeather({data.isGoodWeather.value})
        } catch(error){
            console.log(error);
        }
    }
    loadWeatherTemperature();
  }, []); 
}

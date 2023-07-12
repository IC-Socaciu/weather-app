import "./App.css";
import { useEffect, useState } from "react";
import { uid } from "uid";
import Form from "./components/Form";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";
import TemperatureDisplay from "./components/TemperatureDisplay";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useLocalStorageState("weather", {
    defaultValue: null,
  });

  function addActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        if (response.ok) {
          const data = await response.json();
          setWeather(data);
        } else {
          console.error("Bad response");
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchWeather();
  }, [setWeather]);

  console.log(activities);

  const filteredActivities = activities.filter(
    (activity) => activity.isforGoodWeather === weather?.isGoodWeather
  );

  return (
    <div>
      <TemperatureDisplay
        weatherEmoji={weather.condition}
        temperature={weather.temperature}
      />
      <List
        activities={filteredActivities}
        isGoodWeather={weather.isGoodWeather}
      />
      <Form addActivity={addActivity} />
    </div>
  );
}
export default App;

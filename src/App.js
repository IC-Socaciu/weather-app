import "./App.css";
import { useEffect, useState } from "react";
import { uid } from "uid";
import Form from "./components/Form";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState([]);

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

  return (
    <main>
      <List activities={activities} />
      <Form addActivity={addActivity} />
    </main>
  );
}
export default App;

export default function TemperatureDisplay({ weatherEmoji, temperature }) {
  return (
    <div className="temperatureDisplay">
      <span>{weatherEmoji}</span>
      <span>{temperature}°C</span>
    </div>
  );
}

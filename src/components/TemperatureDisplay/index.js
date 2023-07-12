export default function TemperatureDisplay({ weatherEmoji, temperature }) {
  return (
    <div className="temperatureDisplay">
      <span>{weatherEmoji}</span>
      <span>{temperature}</span>
    </div>
  );
}

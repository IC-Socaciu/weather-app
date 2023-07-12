export default function List({ activities, isGoodWeather }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "The weather is aswesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </h2>
      {activities.length > 0 && (
        <ul className="list">
          {activities.map((activity) => {
            return (
              <li className="list__Items" key={activity.id}>
                {activity.name}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

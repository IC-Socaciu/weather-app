export default function List({ activities }) {
  return (
    <ul className="list">
      {activities.map((activity) => {
        return (
          <li className="list__Items" key={activity.id}>
            {activity.name}
          </li>
        );
      })}
    </ul>
  );
}

export default function Event({ event, host, location, date, time }) {
  return (
    <div>
      <h3>{event}</h3>
      <p>{host}</p>
      <p>{location}</p>
      <p>{date}</p>
      <p>{time}</p>
    </div>
  );
}

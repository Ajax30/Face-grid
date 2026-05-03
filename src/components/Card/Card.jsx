import "./Card.css";

export default function Card({ user }) {
  return (
    <div className="card">
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
      />

      <h3>{user.name.first} {user.name.last}</h3>

      <p>Lives in {user.location.city}, {user.location.country}</p>

      <button data-id={user.login.uuid}>Connect</button>
    </div>
  );
}

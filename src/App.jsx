import { useEffect, useState } from "react";
import "./App.css";
import Spinner from "./components/Spinner/Spinner";
import Topbar from "./components/Topbar/Topbar";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

export default function App() {
  const apiURL = "https://randomuser.me/api/?results=240";
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    const location = `${user.location.city} ${user.location.country}`.toLowerCase();
    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      location.includes(searchTerm.toLowerCase())
    );
  });

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.results);
        setDataIsLoaded(true);
      });
  }, []);

  return (
    <div className="app-wrapper">
      <Topbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="grid">
        {!dataIsLoaded ? (
          <Spinner />
        ) : filteredUsers.length === 0 ? (
          <p className="no-results">No results found</p>
        ) : (
          filteredUsers.map((user) => (
            <Card key={user.login.uuid} user={user} />
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}

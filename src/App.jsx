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
      <Topbar />

      <div className="grid">
        {!dataIsLoaded && <Spinner />}

        {dataIsLoaded && !users.length && (
          <p className="no-results">No results found</p>
        )}

        {dataIsLoaded &&
          users.length > 0 &&
          users.map((user) => <Card key={user.login.uuid} user={user} />)}
      </div>

      <Footer />
    </div>
  );
}

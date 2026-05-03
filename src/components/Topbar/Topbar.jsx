import "./Topbar.css";
import logo from "../../img/logo.png";

export default function Topbar() {
  return (
    <div className="top-bar">
      <a className="brand" href="/">
        <img src={logo} alt="Face Grid" />
      </a>

      <input type="search" className="search" placeholder="Search" />
    </div>
  );
}

import "./Topbar.css";
import logo from "../../img/logo.png";
import { useDebounce } from "../../hooks/useDebounce";

export default function Topbar({ setSearchTerm }) {
  const debouncedSetSearch = useDebounce(setSearchTerm, 300);

  return (
    <div className="top-bar">
      <a className="brand" href="/">
        <img src={logo} alt="Face Grid" />
      </a>

      <input
        type="search"
        className="search"
        placeholder="Search"
        onChange={(e) => debouncedSetSearch(e.target.value)}
      />
    </div>
  );
}
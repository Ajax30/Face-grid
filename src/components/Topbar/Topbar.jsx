import styles from "./Topbar.module.css";
import logo from "../../img/logo.png";
import { useDebounce } from "../../hooks/useDebounce";

export default function Topbar({ setSearchTerm }) {
  const debouncedSetSearch = useDebounce(setSearchTerm, 300);
  return (
    <div className={styles.topBar}>
      <a className={styles.brand} href="/">
        <img src={logo} alt="Face Grid" />
      </a>

      <input
        type="search"
        className={styles.search}
        placeholder="Search"
        onChange={(e) => debouncedSetSearch(e.target.value)}
      />
    </div>
  );
}

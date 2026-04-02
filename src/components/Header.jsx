import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isStartPage = pathname === "/";

  return (
    <header className={styles.header}>
      {isStartPage ? (
        <div className={styles["header-content"]}>
          <h3>Branschevent 2026</h3>
          <p className={styles["header-subtitle"]}>DD x WU</p>
        </div>
      ) : (
        <button className={styles["back-button"]} onClick={() => navigate(-1)}>
          <img src="src/assets/arrow-back.png"></img> Tillbaka
        </button>
      )}

      <img
        className={styles.logo}
        src="src/assets/logo/bomarke.svg"
        alt="Logo"
      />
    </header>
  );
}

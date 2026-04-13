import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../assets/logo/bomarke.svg";
import arrowBack from "../assets/arrow-back.png";

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
          <img src={arrowBack} alt="Tillbaka" /> Tillbaka
        </button>
      )}

      <img
        className={styles.logo}
        src={logo}
        alt="Logo"
        onClick={() => navigate("/")}
      />
    </header>
  );
}

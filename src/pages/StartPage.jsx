import { useState } from "react";
import styles from "./StartPage.module.css";

export default function StartPage() {
  const [role, setRole] = useState(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LIA Connect</h1>

      <p>13:00-17:00</p>
      <p>Lindholmspiren 7</p>

      <h2 className={styles.subtitle}>Hitta rätt personer att prata med</h2>

      <ol>
        <li>Välj dina områden</li>
        <li>Få din profil</li>
        <li>Matcha & prata</li>
      </ol>

      <button className={styles.button} onClick={() => setRole("company")}>
        Företag
      </button>

      <button className={styles.button} onClick={() => setRole("student")}>
        Student
      </button>

      {role && <p>You selected: {role}</p>}
    </div>
  );
}

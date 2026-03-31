import { useState } from "react";
import styles from "./StartPage.module.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function StartPage({ profileData, setProfileData }) {
  const [role, setRole] = useState(null);

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>LIA</h1>
        <h1 className={styles.title}>Connect</h1>
        <h3 className={styles.subtitle}>Connecting The Dotts</h3>
        <div className={styles.details}>
          <p className={styles.time}>13:00-17:00</p>
          <p className={styles.location}>Lindholmspiren 7</p>
        </div>
      </section>

      <section className={styles.intro}>
        <h2 className={styles.subtitle}>Hitta rätt personer att prata med</h2>
        <h4 className={styles.introText}>
          Välj dina områden, få en visuell profil och matcha med andra på
          eventet.
        </h4>
      </section>

      <section className={styles.steps}>
        <div className={styles["steps-container"]}>
          <div className={styles["steps-number"]}>
            <p>1</p>
          </div>
          <div className={styles["steps-text"]}>
            <h4>Välj dina områden</h4>
            <p>Markera det du jobbar med eller är intresserad av</p>
          </div>
        </div>

        <div className={styles["steps-container"]}>
          <div className={styles["steps-number"]}>
            <p>2</p>
          </div>
          <div className={styles["steps-text"]}>
            <h4>Få din profil</h4>
            <p>Du får färger som representerar dina val</p>
          </div>
        </div>

        <div className={styles["steps-container"]}>
          <div className={styles["steps-number"]}>
            <p>3</p>
          </div>
          <div className={styles["steps-text"]}>
            <h4>Matcha och prata</h4>
            <p>Markera det du jobbar med eller är intresserad av</p>
          </div>
        </div>
      </section>

      <div className={styles.roleButtons}>
        <Button
          onClick={() => {
            setProfileData((prev) => ({ ...prev, role: "company" }));
            navigate("/profile");
          }}
        >
          Företag
        </Button>

        <Button
          onClick={() => {
            setProfileData((prev) => ({ ...prev, role: "student" }));
            navigate("/profile");
          }}
        >
          Student
        </Button>
      </div>
    </div>
  );
}

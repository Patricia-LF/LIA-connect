import { useEffect, useState } from "react";
import styles from "./StartPage.module.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Step from "../components/Step";
import DotText from "../components/DotText";

export default function StartPage({ resetProfileData, setProfileData }) {
  const navigate = useNavigate();

  useEffect(() => {
    resetProfileData();
  }, []);

  const steps = [
    {
      number: 1,
      title: "Välj dina områden",
      text: "Markera det du jobbar med eller är intresserad av",
    },
    {
      number: 2,
      title: "Få din profil",
      text: "Få kort med samtalsfrågor och färger som representerar dina val",
    },
    {
      number: 3,
      title: "Matcha och prata",
      text: "Hitta andra med liknande profil och börja mingla",
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.title}>
          <DotText />
        </div>
        <h3 className={styles.subtitle}>Connecting The Dots</h3>
        <div className={styles.details}>
          <p className={styles.time}>22 april, 15:00-16:30</p>
          <p className={styles.location}>Visual Arena, Lindholmspiren 3</p>
        </div>
      </section>

      <section className={styles.intro}>
        <h2 className={styles.subtitle}>Hitta rätt personer att prata med.</h2>
        <h4 className={styles.introText}>
          Välj dina områden, få en visuell profil och matcha med andra på
          eventet.
        </h4>
      </section>

      <section className={styles.steps}>
        {steps.map((step) => (
          <Step
            key={step.number}
            number={step.number}
            title={step.title}
            text={step.text}
          />
        ))}
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

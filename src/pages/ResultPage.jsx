import { interests } from "../data/interests";
import styles from "./ResultPage.module.css";
import CircleOrganism from "../components/CircleOrganism";
import FeaturedCards from "../components/FeaturedCards";

const educationLabel = {
  webbutveckling: "Webbutveckling",
  "digital-design": "Digital Design",
};

export default function ResultPage({ profileData }) {
  const isStudent = profileData.role === "student";

  const selectedInterests = interests.filter((interest) =>
    profileData.interests.includes(interest.id),
  );

  return (
    <div className={styles.profile}>
      <p className={styles.label}>
        {isStudent
          ? educationLabel[profileData.education]
          : profileData.company}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="109"
          height="2"
          viewBox="0 0 109 2"
          fill="none"
        >
          <path
            d="M0 0.673828H108.048"
            stroke="#E51536"
            strokeWidth="1.34758"
          />
        </svg>
      </p>

      <p className={styles.name}>{profileData.name}</p>

      <div className={styles.animation}>
        <div className={styles.circle}>
          <CircleOrganism colors={selectedInterests.map((i) => i.color)} />
        </div>

        <div className={styles.cards}>
          <FeaturedCards selectedInterests={selectedInterests} />
        </div>
      </div>
    </div>
  );
}

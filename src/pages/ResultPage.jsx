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
      </p>
      <p>{profileData.name}</p>
      <CircleOrganism interests={selectedInterests} />
      <FeaturedCards selectedInterests={selectedInterests} />
    </div>
  );
}

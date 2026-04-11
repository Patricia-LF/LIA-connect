import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { interests } from "../data/interests";
import { companies } from "../data/companies";
import styles from "./ProfileForm.module.css";
import Button from "../components/Button";
import Spinner from "../components/Spinner";
import { useEffect } from "react";

export default function ProfileForm({ profileData, setProfileData }) {
  useEffect(() => {
    setProfileData((prev) => ({
      ...prev,
      interests: [],
    }));
  }, []);

  const navigate = useNavigate();
  const isStudent = profileData.role === "student";
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filtered = companies.filter((c) =>
    c.name.toLowerCase().startsWith(profileData.company.toLowerCase()),
  );

  function handleNameChange(e) {
    setProfileData((prev) => ({ ...prev, name: e.target.value }));
  }

  function handleEducationChange(e) {
    setProfileData((prev) => ({ ...prev, education: e.target.value }));
  }

  function handleCompanyChange(e) {
    setProfileData((prev) => ({ ...prev, company: e.target.value }));
  }

  function toggleInterest(id) {
    setProfileData((prev) => {
      const already = prev.interests.includes(id);
      return {
        ...prev,
        interests: already
          ? prev.interests.filter((i) => i !== id)
          : [...prev.interests, id],
      };
    });
  }

  const [isLoading, setIsLoading] = useState(false);

  const isValid =
    /* profileData.name.trim() && */
    profileData.interests.length > 0; /* &&
    (!isStudent || profileData.education); */

  function handleSubmit() {
    if (profileData.interests.length === 0) return;
    setIsLoading(true);
    setTimeout(() => navigate("/result"), 800); // liten fördröjning för känslan
    /* navigate("/result"); */
  }

  if (isLoading) return <Spinner />;

  return (
    <div className={styles["profile-page"]}>
      <div className={styles["profile-container"]}>
        <p className={styles["profile-role-label"]}>
          {isStudent ? "Student" : "Företag"}
        </p>
        <h1 className={styles["profile-heading"]}>
          {isStudent ? "Berätta kort om dig" : "Berätta kort om er"}
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
        </h1>

        <div className={styles["field-group"]}>
          <label
            className={styles["field-label"]}
            htmlFor={isStudent ? "education" : "company"}
          >
            {isStudent ? "Utbildning" : "Företag"}
          </label>
          {isStudent ? (
            <select
              id={isStudent ? "education" : "company"}
              className={styles["field-select"]}
              value={profileData.education}
              onChange={handleEducationChange}
            >
              <option value="">Välj utbildning</option>
              <option value="webbutveckling">Webbutveckling</option>
              <option value="digital-design">Digital Design</option>
            </select>
          ) : (
            <>
              <div className={styles["company-wrapper"]}>
                <input
                  id="education"
                  type="text"
                  className={styles.fieldInput}
                  placeholder="Ange företag..."
                  value={profileData.company}
                  onChange={(e) => {
                    handleCompanyChange(e);
                    setShowSuggestions(true);
                  }}
                  onFocus={(e) => {
                    e.target.select();
                    setShowSuggestions(true);
                  }}
                  onBlur={() =>
                    setTimeout(() => setShowSuggestions(false), 150)
                  }
                  autoComplete="off"
                />
                <span className={styles["company-arrow"]}>▾</span>
                {showSuggestions && filtered.length > 0 && (
                  <ul className={styles["company-suggestions"]}>
                    {filtered.map((company) => (
                      <li
                        key={company.id}
                        onMouseDown={() => {
                          setProfileData((prev) => ({
                            ...prev,
                            company: company.name,
                          }));
                          setShowSuggestions(false);
                        }}
                      >
                        {company.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          )}
        </div>

        <div className={styles["profile-fields"]}>
          <div className={styles["field-group"]}>
            <label className={styles["field-label"]} htmlFor="name">
              Namn
            </label>
            <input
              id="name"
              type="text"
              className={styles.fieldInput}
              placeholder="Förnamn Efternamn"
              value={profileData.name}
              onChange={handleNameChange}
              autoComplete="off"
            />
          </div>
        </div>

        <div className={styles["interests-section"]}>
          <p className={styles["interests-hint"]}>
            {isStudent ? "Välj dina intressen" : "Välj era arbetsområden"}
          </p>

          <div className={styles["interests-grid"]}>
            {interests.map((interest) => {
              const selected = profileData.interests.includes(interest.id);
              return (
                <Button
                  key={interest.id}
                  variant="secondary"
                  selected={selected}
                  ariaPressed={selected}
                  onClick={() => toggleInterest(interest.id)}
                  style={{ "--interest-color": interest.color }}
                >
                  {interest.label}
                </Button>
              );
            })}
          </div>
        </div>

        {isStudent && (
          <div className={styles["field-group-portfolio"]}>
            <label className={styles["field-label"]} htmlFor="portfolio">
              Skapa QR-kod till Portfolio
            </label>
            <input
              id="portfolio"
              type="url"
              className={styles.fieldInput}
              placeholder="https://dinportfolio.se"
              value={profileData.portfolioUrl}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  portfolioUrl: e.target.value,
                }))
              }
              autoComplete="off"
            />
          </div>
        )}

        <Button onClick={handleSubmit} disabled={!isValid} type="submit">
          Skapa din profil{" "}
        </Button>
      </div>
      <footer></footer>
    </div>
  );
}

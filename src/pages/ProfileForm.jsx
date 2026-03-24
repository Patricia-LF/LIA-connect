import { useNavigate } from 'react-router-dom'
import { interests } from '../data/interests'
import './ProfileForm.css'

export default function ProfileForm({ profileData, setProfileData }) {
  const navigate = useNavigate()
  const isStudent = profileData.role === 'student'

  function handleNameChange(e) {
    setProfileData(prev => ({ ...prev, name: e.target.value }))
  }

  function handleEducationChange(e) {
    setProfileData(prev => ({ ...prev, education: e.target.value }))
  }

  function toggleInterest(id) {
    setProfileData(prev => {
      const already = prev.interests.includes(id)
      return {
        ...prev,
        interests: already
          ? prev.interests.filter(i => i !== id)
          : [...prev.interests, id],
      }
    })
  }

  function handleSubmit() {
    if (!profileData.name.trim()) return
    if (isStudent && !profileData.education) return
    if (profileData.interests.length === 0) return
    navigate('/result')
  }

  const isValid =
    profileData.name.trim() &&
    profileData.interests.length > 0 &&
    (!isStudent || profileData.education)

  return (
    <div className="profile-page">
      <div className="profile-container">
        <p className="profile-role-label">
          {isStudent ? 'Student' : 'Företag'}
        </p>
        <h1 className="profile-heading">
          {isStudent ? 'Berätta om dig' : 'Berätta om er'}
        </h1>

        <div className="profile-fields">
          <div className="field-group">
            <label className="field-label" htmlFor="name">
              {isStudent ? 'Ditt namn' : 'Företagsnamn'}
            </label>
            <input
              id="name"
              type="text"
              className="field-input"
              placeholder={isStudent ? 'Förnamn Efternamn' : 'Företagets namn'}
              value={profileData.name}
              onChange={handleNameChange}
              autoComplete="off"
            />
          </div>

          {isStudent && (
            <div className="field-group">
              <label className="field-label" htmlFor="education">
                Utbildning
              </label>
              <select
                id="education"
                className="field-input field-select"
                value={profileData.education}
                onChange={handleEducationChange}
              >
                <option value="">Välj utbildning</option>
                <option value="webbutveckling">Webbutveckling</option>
                <option value="digital-design">Digital Design</option>
              </select>
            </div>
          )}
        </div>

        <div className="interests-section">
          <p className="field-label">
            {isStudent
              ? 'Vad är du intresserad av?'
              : 'Vad jobbar ni med eller söker hos en student?'}
          </p>
          <p className="interests-hint">Välj så många du vill</p>

          <div className="interests-grid">
            {interests.map(interest => {
              const selected = profileData.interests.includes(interest.id)
              return (
                <button
                  key={interest.id}
                  className={`interest-btn ${selected ? 'selected' : ''}`}
                  style={{
                    '--interest-color': interest.color,
                  }}
                  onClick={() => toggleInterest(interest.id)}
                  type="button"
                  aria-pressed={selected}
                >
                  {interest.label}
                </button>
              )
            })}
          </div>
        </div>

        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={!isValid}
          type="button"
        >
          Skapa din profil
        </button>
      </div>
    </div>
  )
}
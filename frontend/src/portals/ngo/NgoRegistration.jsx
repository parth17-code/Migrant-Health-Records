import React, { useState } from 'react'
import styles from './NgoRegistration.module.css'

const expertiseOptions = [
  { name: 'Financial Aid', icon: '🎓' },
  { name: 'Health Camp', icon: '🩺' },
  { name: 'Counselling', icon: '💬' },
  { name: 'Scheme Linkage', icon: '🔗' },
  { name: 'Awareness', icon: '📢' },
  { name: 'Emergency', icon: '🚨' }
]

function NgoRegistration({ onFinish }) {
  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    ngoName: '',
    contactName: '',
    mobile: '',
    email: '',
    district: '',
    hospital: '',
    password: '',
    confirmPassword: '',
  })
  const [expertise, setExpertise] = useState({})
  const [error, setError] = useState('')
  const [uploadedFileName, setUploadedFileName] = useState('')
  const fileInputRef = React.useRef(null)

  const handleDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleExpertiseChange = (e) => {
    setExpertise({ ...expertise, [e.target.name]: e.target.checked })
  }

  const handleUploadClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setUploadedFileName(file.name)
      console.log('File selected:', file)
    }
  }

  const goToNextStep = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    setError('')
    setFormStep(2)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const selectedExpertise = Object.keys(expertise).filter(key => expertise[key])
    if (selectedExpertise.length === 0) {
      setError('Please select at least one area of expertise.')
      return
    }
    const finalData = {
      ...formData,
      expertise: selectedExpertise,
      verificationDocument: uploadedFileName,
    }
    console.log("NGO Registration Data:", finalData)
    alert("Registration submitted for review!")
    onFinish()
  }

  return (
    <div className={styles.card}>
      {formStep === 1 && (
        <form onSubmit={goToNextStep}>
          <h2 className={styles.title}>NGO REGISTRATION FORM</h2>

          <div className={styles.inputGroup}>
            <label htmlFor="ngoName">NGO Name:</label>
            <input id="ngoName" name="ngoName" onChange={handleDataChange} required />
          </div>

          <p className={styles.subHeader}>Contact Person Details</p>

          <div className={styles.inputGroup}>
            <label htmlFor="contactName">Name:</label>
            <input id="contactName" name="contactName" onChange={handleDataChange} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="mobile">Mobile:</label>
            <input id="mobile" name="mobile" type="tel" onChange={handleDataChange} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" onChange={handleDataChange} required />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="district">Districts of Operation:</label>
            <select id="district" name="district" onChange={handleDataChange} required>
              <option value="">Select District</option>
              <option value="Kollam">Kollam</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="hospital">Tied hospitals:</label>
            <select id="hospital" name="hospital" onChange={handleDataChange} required>
              <option value="">Select Hospital</option>
              <option value="Hospital A">Hospital A</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" onChange={handleDataChange} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input id="confirmPassword" name="confirmPassword" type="password" onChange={handleDataChange} required />
          </div>
          
          {error && <p className={styles.errorText}>{error}</p>}
          <button type="submit" className={styles.submitButton}>Next</button>
        </form>
      )}

      {formStep === 2 && (
        <form onSubmit={handleSubmit}>
          <button type="button" onClick={() => setFormStep(1)} className={styles.backButton}>&lt;</button>
          <h2 className={styles.title}>NGO REGISTRATION FORM</h2>
          <p className={styles.subHeader}>Expertise</p>
          <div className={styles.expertiseGrid}>
            {expertiseOptions.map(item => (
              <label key={item.name} className={styles.checkboxLabel}>
                <input type="checkbox" name={item.name} onChange={handleExpertiseChange} />
                {item.name}
                <span className={styles.icon}>{item.icon}</span>
              </label>
            ))}
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <button type="button" onClick={handleUploadClick} className={styles.uploadButton}>
            Upload Verification documents
          </button>
          {uploadedFileName && <p className={styles.fileName}>File selected: {uploadedFileName}</p>}

          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitButton}>Submit</button>
            <button type="button" onClick={onFinish} className={styles.cancelButton}>Cancel</button>
          </div>
          <p className={styles.footerText}>Your registration will be reviewed by Authorities before you can accept requests.</p>
        </form>
      )}
    </div>
  )
}

export default NgoRegistration
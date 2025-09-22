import React, { useState } from 'react';
import styles from './MigrantRegistrationForm.module.css';

// The component accepts 'onNext' and 'onBack'
function MigrantRegistrationForm({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    aadhar: '',
    mobile: '',
    district: '',
    address: '',
    occupation: '',
    language: '',
    employerId: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    if (!formData.aadhar.trim()) newErrors.aadhar = 'Aadhar number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // This function now correctly calls 'onNext'
  const handleNext = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onNext(formData);
    }
  };

  return (
    <div className={styles.card}>
      <button className={styles.backButton} onClick={onBack}>&lt;</button>
      <h2 className={styles.title}>MIGRANT REGISTRATION FORM</h2>
      <form onSubmit={handleNext} className={styles.formGrid}>
        
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className={styles.errorText}>{errors.name}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="" disabled>Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="aadhar">Aadhar Number:</label>
          <input type="text" id="aadhar" name="aadhar" value={formData.aadhar} onChange={handleChange} />
          {errors.aadhar && <p className={styles.errorText}>{errors.aadhar}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="mobile">Mobile Number:</label>
          <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
          {errors.mobile && <p className={styles.errorText}>{errors.mobile}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="district">District:</label>
          <select id="district" name="district" value={formData.district} onChange={handleChange}>
             <option value="" disabled>Select</option>
             <option value="District 1">District 1</option>
             <option value="District 2">District 2</option>
          </select>
        </div>
        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
          <label htmlFor="address">Current Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="occupation">Occupation:</label>
          <input type="text" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="language">Preferred Language:</label>
          <select id="language" name="language" value={formData.language} onChange={handleChange}>
             <option value="" disabled>Select</option>
             <option value="English">English</option>
             <option value="Hindi">Hindi</option>
             <option value="Marathi">Marathi</option>
          </select>
        </div>
        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
          <label htmlFor="employerId">Employer ID:</label>
          <input type="text" id="employerId" name="employerId" value={formData.employerId} onChange={handleChange} />
        </div>

        <button type="submit" className={`${styles.primaryButton} ${styles.fullWidth}`}>NEXT</button>
      </form>
    </div>
  );
}

export default MigrantRegistrationForm;
import React, { useState } from 'react';
import styles from './SelectHospital.module.css';

// 1. Accept the new 'onBack' prop
function SelectHospital({ onNext, onBack }) {
  const [hospital, setHospital] = useState('');

  return (
    <div className={styles.card}>
      {/* 2. Add the back button element */}
      <button className={styles.backButton} onClick={onBack}>&lt;</button>
      
      <h2 className={styles.title}>CHOOSE HOSPITAL</h2>
      <select 
        className={styles.dropdown}
        value={hospital}
        onChange={(e) => setHospital(e.target.value)}
      >
        <option value="" disabled>Choose Hospital</option>
        <option value="City General Hospital">City General Hospital</option>
        <option value="Community Health Center">Community Health Center</option>
        <option value="St. Mary's Medical">St. Mary's Medical</option>
      </select>
      <div className={styles.buttonGroup}>
        <button className={styles.secondaryButton} onClick={() => onNext({ hospital: 'SKIPPED' })}>
          SKIP
        </button>
        <button className={styles.primaryButton} onClick={() => onNext({ hospital })}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default SelectHospital;
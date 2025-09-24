import React from 'react';
import styles from './RoleSelection.module.css';

function RoleSelection({ onSelectMode }) {
  return (
    <div className={styles.container}>
      <div className={styles.logoArea}>
        {/* You can place your Jeevitham logo here */}
        <h1>JEEVITHAM</h1>
        <p>Health Records for Migrants</p>
      </div>
      <div className={styles.buttonGroup}>
        <button onClick={() => onSelectMode('migrantFlow')} className={styles.roleButton}>
          Login For Migrants
        </button>
        <button onClick={() => onSelectMode('ngoFlow')} className={styles.roleButton}>
          Login For NGOs
        </button>
      </div>
    </div>
  );
}

export default RoleSelection;
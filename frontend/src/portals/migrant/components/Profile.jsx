import React from 'react';
import styles from './Profile.module.css';

function Profile({ userData, navigateTo, onLogout }) {
  return (
    <div className={styles.card}>
      <button className={styles.backButton} onClick={() => navigateTo('dashboard')}>&lt; Back to Dashboard</button>
      <div className={styles.header}>
        <div className={styles.avatar}></div>
        <h2 className={styles.name}>{userData.name}</h2>
        <div className={styles.qrCode}><span>QR</span></div>
      </div>
      <div className={styles.details}>
        <p><strong>Migrant ID:</strong> {userData.migrantId}</p>
        <p><strong>Gender:</strong> {userData.gender}</p>
        <p><strong>Age:</strong> {userData.age}</p>
        <p><strong>Category:</strong> Not assigned</p>
        <p><strong>DOB:</strong> {userData.dob}</p>
        <p><strong>Language selected:</strong> {userData.language}</p>
        <p><strong>Aadhar number:</strong> {userData.aadhar}</p>
        <p><strong>Mobile Number:</strong> {userData.mobile}</p>
      </div>
      <div className={styles.actions}>
        <button className={styles.settingsButton}>⚙️ Settings</button>
        <button className={styles.signOutButton} onClick={onLogout}>🚪 Sign out</button>
      </div>
    </div>
  );
}

export default Profile;
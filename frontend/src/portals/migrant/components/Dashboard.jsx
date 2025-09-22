import React from 'react';
import styles from './Dashboard.module.css';

function Dashboard({ userData, navigateTo, onLogout }) {
  const renderHealthRecords = () => {
    if (userData.documents.length === 0) {
      return (
        <>
          <p className={styles.statusText}><span className={styles.warningIcon}>🔺</span> You have not uploaded any documents.</p>
          <button onClick={() => navigateTo('upload')} className={styles.actionButton}>Upload Now</button>
        </>
      );
    }
    return (
      <>
        <p>View Health Documents.</p>
        <button onClick={() => navigateTo('viewDocuments')} className={styles.viewButton}>Click here to view</button>
      </>
    );
  };

  const renderHospitalStatus = () => {
    if (!userData.hospital) {
      return (
        <>
          <p className={styles.statusText}><span className={styles.warningIcon}>🔺</span> You have not selected any hospital.</p>
          <button onClick={() => navigateTo('selectHospital')} className={styles.actionButton}>Select hospital</button>
        </>
      );
    }
    return (
      <>
        <p><strong>Selected Hospital:</strong> {userData.hospital.name}</p>
        <p><strong>Queue status:</strong> {userData.hospital.queueStatus}</p>
        <p><strong>Appointment Date:</strong> {userData.hospital.appointmentDate}</p>
      </>
    );
  };

  const renderHelpAndRequests = () => {
    if (!userData.request) {
      return <p className={styles.statusText}><span className={styles.warningIcon}>🔺</span> You have not requested for any NGO support.</p>;
    }
    if (userData.request.status === 'pending') {
      return <p className={styles.statusText}><span className={styles.warningIcon}>🔺</span> Your Request ({userData.request.type}) is pending.</p>;
    }
    if (userData.request.status === 'accepted') {
      return <p className={styles.statusText}><span className={styles.successIcon}>✅</span> Your Request ({userData.request.type}) is accepted.</p>;
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.header}>
        <div className={styles.welcomeMessage}>
          <h2>WELCOME, {userData.name}</h2>
          <p>Track your health status and requests here.</p>
        </div>
        <button onClick={onLogout} className={styles.logoutButton}>Logout</button>
      </div>

      <h1 className={styles.dashboardTitle}>DASHBOARD</h1>

      <div className={styles.grid}>
        <div className={`${styles.card} ${styles.profile}`} onClick={() => navigateTo('profile')}>
          <h3>Profile</h3>
          <div className={styles.profileContent}>
            <div className={styles.avatar}></div>
            <div className={styles.profileDetails}>
              <p><strong>Name:</strong> {userData.name}</p>
              <p><strong>Gender:</strong> {userData.gender}</p>
              <p><strong>Age:</strong> {userData.age}</p>
              <p><strong>Category:</strong> <span className={userData.category === 'RED' ? styles.redCategory : ''}>{userData.category}</span></p>
            </div>
            <div className={styles.qrCode}><span>QR</span></div>
          </div>
          <p className={styles.migrantId}>{userData.migrantId}</p>
        </div>

        <div className={`${styles.card} ${styles.healthRecords}`}>{renderHealthRecords()}</div>
        <div className={`${styles.card} ${styles.hospitalStatus}`}>{renderHospitalStatus()}</div>
        <div className={`${styles.card} ${styles.helpRequests}`}>{renderHelpAndRequests()}</div>
        <div className={`${styles.card} ${styles.notifications}`}>
          <h3>Notification & Alerts</h3>
          <ul>
            <li><span className={styles.bellIcon}>🔔</span> Upcoming health camp at Smile foundation.</li>
            <li><span className={styles.bellIcon}>🔔</span> Upcoming awareness camp at Sun foundation.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
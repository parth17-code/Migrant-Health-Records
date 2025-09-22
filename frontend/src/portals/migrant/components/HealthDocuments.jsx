import React from 'react';
import styles from './HealthDocuments.module.css';

function HealthDocuments({ userData, navigateTo }) {
  return (
    <div className={styles.card}>
      <button className={styles.backButton} onClick={() => navigateTo('dashboard')}>&lt; Back to Dashboard</button>
      <h2 className={styles.title}>📄 Your Health Documents</h2>
      <div className={styles.documentList}>
        {userData.documents.length > 0 ? (
          userData.documents.map((doc, index) => (
            <div key={index} className={styles.documentItem}>
              <span className={styles.folderIcon}>📁</span> {doc}
            </div>
          ))
        ) : (
          <p>You have no documents uploaded.</p>
        )}
      </div>
    </div>
  );
}


export default HealthDocuments;
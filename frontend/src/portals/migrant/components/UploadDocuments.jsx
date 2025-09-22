import React, { useState, useRef } from 'react';
import styles from './UploadDocuments.module.css';
import uploadIcon from '../../../assets/11.svg'; // This line was added to fix the error

function UploadDocuments({ onNext, onBack }) {
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.card}>
      <button className={styles.backButton} onClick={onBack}>&lt;</button>
      <h2 className={styles.title}>UPLOAD DOCUMENTS</h2>
      <div className={styles.uploadArea} onClick={handleUploadClick}>
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange}
          style={{ display: 'none' }}
          accept=".pdf,.jpeg,.jpg,.png"
        />
        <img src={uploadIcon} alt="Upload" className={styles.uploadIcon} />
        <p>{fileName || 'Tap to upload a file'}</p>
      </div>
      <p className={styles.infoText}>PDF, JPEG or PNG, Max size: 10MB.</p>
      <div className={styles.buttonGroup}>
        <button className={styles.secondaryButton} onClick={() => onNext({ document: 'SKIPPED' })}>
          SKIP
        </button>
        <button className={styles.primaryButton} onClick={() => onNext({ document: fileName || 'SKIPPED' })}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default UploadDocuments;
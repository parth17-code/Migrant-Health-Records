import React, { useState } from 'react';
import styles from './MigrantLogin.module.css';

function MigrantLogin({ onLoginSuccess, onNavigateToRegister, onBack }) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (mobileNumber && otp) {
      setError('');
      onLoginSuccess({ mobileNumber });
    } else {
      setError('Please fill in both mobile number and OTP.');
    }
  };
  
  const handleRegisterClick = (e) => {
    e.preventDefault();
    onNavigateToRegister();
  };

  return (
    <div className={styles.card}>
      <button className={styles.backButton} onClick={onBack}>&lt;</button>
      <h2 className={styles.title}>MIGRANT LOGIN</h2>
      <form onSubmit={handleLogin} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="mobile">Enter Mobile Number:</label>
          <input
            type="tel"
            id="mobile"
            className={styles.inputField}
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <button type="button" className={styles.otpButton}>Send OTP</button>

        <div className={styles.inputGroup}>
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            id="otp"
            className={styles.inputField}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.primaryButton}>Login</button>
      </form>
      
      {error && <p className={styles.errorText}>{error}</p>}
      
      <p className={styles.footerText}>
        Don't have an account?{' '}
        <a href="#" onClick={handleRegisterClick} className={styles.registerLink}>
          Register now
        </a>
      </p>
    </div>
  );
}

export default MigrantLogin;
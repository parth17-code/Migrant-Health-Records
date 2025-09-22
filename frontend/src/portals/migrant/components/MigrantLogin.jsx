import React, { useState } from 'react';
import styles from './MigrantLogin.module.css';

// 1. Accept 'onLoginSuccess' here instead of 'onNext'
function MigrantLogin({ onLoginSuccess, onNavigateToRegister }) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (mobileNumber && otp) {
      setError('');
      // 2. Call the correct prop name: 'onLoginSuccess'
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
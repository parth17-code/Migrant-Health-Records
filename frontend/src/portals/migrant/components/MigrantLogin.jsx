import React, { useState } from 'react';
import styles from './MigrantLogin.module.css';
import Header from './Header';

// 1. Accept the 'onNavigateToRegister' function as a prop here
function MigrantLogin({ onNext, onNavigateToRegister }) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (mobileNumber && otp) {
      onNext({ mobileNumber });
    } else {
      alert('Please fill in both fields.');
    }
  };
  const handleRegisterClick = (e) => {
    e.preventDefault(); // This stops the page from adding '#' to the URL
    onNavigateToRegister(); // This calls the function from App.jsx to change the page
  };

  return (
  <>
    <div className={styles.card}>
      <h2 className={styles.title}>MIGRANT LOGIN</h2>
      <form onSubmit={handleLogin} className={styles.form}>
        {/* ... form inputs and login button are unchanged ... */}
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
      <p className={styles.footerText}>
        Don't have an account?{' '}
        {/* 3. Add the onClick event to the link to trigger the handler function */}
        <a href="#" onClick={handleRegisterClick} className={styles.registerLink}>
          Register now
        </a>
      </p>
    </div>
    </>
  );
}

export default MigrantLogin;
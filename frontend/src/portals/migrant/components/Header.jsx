import React from 'react';
import styles from './Header.module.css';
import logo from '/logo1.svg'; // Make sure you have this logo in assets

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Jeevitham Logo" className={styles.logo} />
      <h1 className={styles.title}>JEEVITHAM</h1>
    </header>
  );
}

export default Header;
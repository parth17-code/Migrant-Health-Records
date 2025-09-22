import React from "react";
import styles from "./BackgroundGraphics.module.css";
// Remove all icon imports (icon1, icon2, icon3)

function BackgroundGraphics() {
  return (
    // This single div will now hold your background image via CSS
    <div className={styles.fullScreenBackground}></div>
  );
}

export default BackgroundGraphics;
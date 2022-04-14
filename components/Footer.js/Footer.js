import React from "react";
import styles from "../../styles/Home.module.css" ;

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Made by <span className="logo text-danger">Saadani Mohamed Amine</span>
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";
import styles from "./navBar.module.css";
import DriveEtaIcon from '@mui/icons-material/DriveEta';

const NavBar = () => {
  return (
    <div className={styles.navBarWrapper}>
      <ul className={styles.navBarList}>
        <li><DriveEtaIcon/></li>
        <li>Store</li>
        <li>X</li>
        <li>M</li>
        <li>7</li>
        <li>6</li>
        <li>5</li>
        <li>3</li>
        <li>2</li>
        <li>z</li>
      </ul>
    </div>
  );
};

export default NavBar;

import React from 'react';
import styles from "./Banner.module.css";
import banner from "../images/banner.jpg";

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.type}>
            <h1>New Website</h1>
            <p>Developed By <span> React.js</span></p>
            </div>
            <img src={banner} alt="banner"/>
        </div>
    );
};

export default Banner;
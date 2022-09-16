import React from 'react';
import samsung from "../images/samsung.jpg";
import xiaomi from "../images/xiaomi.png";
import apple from "../images/apple.jpg";

import styles from "./Logos.module.css";


const Logos = () => {
    return (
        <div className={styles.container}>
            <p>who Support Us?</p>
            <div>
                <img src={samsung} alt="logo"/>
                <img src={xiaomi} alt="logo"/>
                <img src={apple} alt="logo"/>
            </div>
        </div>
    );
};

export default Logos;
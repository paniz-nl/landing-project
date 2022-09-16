import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.ulStyle}>
                <li><Link to="/">Home Page</Link> </li>
                <li><Link to="/product">Products</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;
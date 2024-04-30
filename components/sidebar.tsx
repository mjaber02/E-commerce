import React from 'react';
import { FaEnvelope, FaHeart, FaHome, FaShoppingCart, FaUserAlt, FaUserPlus, FaBars, FaGlobe } from "react-icons/fa";
import styles from "../styles/sidebar.module.css";
import { NavLink } from 'react-router-dom';

interface NavLinkProps {
    to: string;
    key: number;
    className: string;
    activeClassName?: string;
}

const Sidebar = () => {
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <FaHome />
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />
        },
        {
            path: "/wishlist",
            name: "Wishlist",
            icon: <FaHeart />
        },
        {
            path: "/shoppingcart",
            name: "Shopping cart",
            icon: <FaShoppingCart />
        },
        {
            path: "/signup",
            name: "Sign up",
            icon: <FaUserPlus />
        },
        {
            path: "/contact",
            name: "Contact",
            icon: <FaEnvelope />
        },
    ];

    return (
       <>
            <div className={styles.sidebar}>
                <div className={styles.topsection}>
                    <h1> Exclusive</h1>

                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className={styles.link}>
                            <div className={styles.icon}>
                                {item.icon}
                            </div>
                            <div className={styles.text}> {item.name}</div>
                        </NavLink>
                    ))

                }
                <div className={styles.link}> 
                <div className={styles.icon}>
                    <FaGlobe/>
                </div>
                <div className={styles.text}> Languages</div>
            </div>
            </div>
            {/* <main> {children}</main> */}
            </>
    );
};

export default Sidebar;

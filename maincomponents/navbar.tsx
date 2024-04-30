
import { useState } from "react";
import styles from "../styles/navbar.module.css"
import { FaEnvelope, FaHeart, FaHome, FaShoppingCart, FaUserAlt, FaUserPlus, FaBars, FaGlobe } from "react-icons/fa";
import shop from "../svgs/navbar.png"
import search from "../svgs/searchLogo.svg";
import menuIcon from "../svgs/menuicon.png";
import Sidebar from '../components/sidebar';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const menuItem = [
        {
            path: "/",
            name: "Home",

        },
        {
            path: "/contact",
            name: "Contact",

        },
        {
            path: "/about",
            name: "About",

        },

        {
            path: "/signup",
            name: "Sign up",

        },

    ];
    return (
        <>

            <div className={styles.menu}>
                <img src={menuIcon} alt="Menu Icon" className={styles.menuIcon} onClick={toggleSidebar} />

            </div>

            {isSidebarOpen && <Sidebar />}
            <div className={styles.navbar}>

                <div className={styles.part1}>
                    <div className={styles.exclusive}> Exclusive</div>
                    <div className={styles.titles}>
                        {
                            menuItem.map((item, index) => (
                                <NavLink to={item.path} key={index} className={styles.link}>
                                    <ul>
                                        <li>{item.name} </li>
                                    </ul>
                                </NavLink>
                            ))
                        }


                    </div>
                </div>
                <div className={styles.part2}>
                    <div className={styles.search}>
                        <input
                            placeholder="What are you looking for? "
                            className={styles.searchInput} />
                        <img src={search} className={styles.searchLogo} />
                    </div>
                    <div className={styles.icons}>
                        <img src={shop} className={styles.shop} />
                    </div>
                </div>





            </div>
           
          


        </>
    )



}
export default Navbar;
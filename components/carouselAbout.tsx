import React, { useState } from "react";

import appleLogo from "../svgs/apple-logo.svg";
import styles from "../styles/carousel.module.css"

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);



    return (
        <div className={styles.carouselContainer}>
            <div className={`${styles.carouselIphone} ${currentSlide === 0 ? styles.active : ''}`}>
                <div className={styles.carouselText}>
                    <div className={styles.iphoneSeries}>
                        <img src={appleLogo} alt="Apple Logo" />
                        <p>Iphone 14 Series</p>
                    </div>
                    <div className={styles.voucher}>
                        <h1>Up to 10% off Voucher</h1>
                    </div>
                    <div className={styles.shopNow}>
                        <p>Shop Now &#8594;</p>
                    </div>
                </div>
                <div className={styles.carouselImage}></div>
            </div>

            <div className={`${styles.carouselIphone} ${currentSlide === 1 ? styles.active : ''}`}>
                <div className={styles.carouselText}>
                    <div className={styles.iphoneSeries}>
                        <img src={appleLogo} alt="Apple Logo" />
                        <p>Iphone 14 Series</p>
                    </div>
                    <div className={styles.voucher}>
                        <h1>Up to 10% off Voucher</h1>
                    </div>
                    <div className={styles.shopNow}>
                        <p>Shop Now &#8594;</p>
                    </div>
                </div>
            </div>

            <div className={`${styles.carouselIphone} ${currentSlide === 2 ? styles.active : ''}`}>
                <div className={styles.carouselImage} />
            </div>
            <div className={styles.navigationCircles}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <div
                        className={index === currentSlide ? styles.selectedCircle : styles.circle}
                        onClick={() => setCurrentSlide(index)}
                        key={index}
                    />
                ))}
            </div>


        </div>
    );
};

export default Carousel;

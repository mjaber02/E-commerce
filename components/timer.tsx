import React, { useState, useEffect } from 'react';
import styles from "../styles/timer.module.css";
import today from "../svgs/today.svg";
import rightArrow from "../svgs/righarrow.svg";
import leftArrow from "../svgs/leftarrow.svg";


interface Props {
    time: number;
    handleRightArrow: () => void;
    handleClickLeftArrow: () => void;
}   

const Timer: React.FC<Props> = (props) => {
    const { handleClickLeftArrow, handleRightArrow } = props;
    const [timeLeft, setTimeLeft] = useState(props.time);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            } else {
                clearTimeout(timer);

            }
        }, 1000);


        return () => clearTimeout(timer);
    }, [timeLeft]);


    const days: number = Math.floor(timeLeft / (60 * 60 * 24));
    const hours: number = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
    const minutes: number = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds: number = timeLeft % 60;

    return (
        <div className={styles.flashSales}>
            <div className={styles.text}>
                <div className={styles.titles}>
                    <div className={styles.today}>
                        <img src={today} alt="TODAY" />
                    </div>
                    <div className={styles.sales}>
                        <h1> Flash Sales</h1>

                    </div>

                </div>
                <div className={styles.timeDisplay}>
                    <div className={styles.days}>

                        <span>Days</span>
                        <h1>
                            {`${days.toString().padStart(2, '0')}`}<span className={styles.colon}>:</span>
                        </h1>
                    </div>
                    <div className={styles.days}>
                        <span>Hours</span>
                        <h1>
                            {`${hours.toString().padStart(2, '0')}`}<span className={styles.colon}>:</span>
                        </h1>
                    </div>
                    <div className={styles.days}>
                        <span>Minutes</span>
                        <h1>
                            {`${minutes.toString().padStart(2, '0')}`}<span className={styles.colon}>:</span>
                        </h1>
                    </div>
                    <div className={styles.days}>
                        <span>Seconds</span>
                        <h1>
                            {`${seconds.toString().padStart(2, '0')}`}
                        </h1>
                    </div>



                </div>
            </div>
            <div className={styles.arrow}>
                <img src={leftArrow} onClick={handleClickLeftArrow} />
                <img src={rightArrow} onClick={handleRightArrow} />


            </div>
        </div>
    );
};

export default Timer;

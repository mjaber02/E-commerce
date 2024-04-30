import React, { useEffect, useState } from 'react'
import styles from "../styles/enhanceyourmusicexperience.module.css";

interface Props {
    time: number;

}   

const TimerCategory: React.FC<Props> = (props) => {
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
    <>
    <div className={styles.timer}>
            <div className={styles.circle}>{<b>{days.toString().padStart(2, '0')}</b>}{days<=1? <span> day</span>:<span> days</span>}</div>
            <div className={styles.circle}>{<b>{hours.toString().padStart(2, '0')}</b>} {hours<=1? <span> hour</span>:<span>hours</span>}</div>
            <div className={styles.circle}>{<b>{minutes.toString().padStart(2, '0')}</b>} {minutes<=1? <span> minute</span>:<span> minutes</span>}</div>
            <div className={styles.circle}>{<b> {seconds.toString().padStart(2, '0')}</b>}{seconds<=1? <span> second</span>:<span> seconds</span>}</div>

            </div>
            </>
  )
}

export default TimerCategory;
import React from 'react'
import styles from '../styles/enhanceyourmusicexperience.module.css'
import TimerCategory from './timerCategory';

import music from "../svgs/music.svg";
const EnhanceYourMusicExperince = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.text}>
                    <h5> Categories</h5>
                    <h1> Enhance Your Music Experience</h1>
                    <TimerCategory time={4000} />
                    <button> Buy Now!</button>


                </div>

                <div className={styles.image}>
                    <img src={music} alt="music" />


                </div>
            </div>



        </>
    )
}

export default EnhanceYourMusicExperince;
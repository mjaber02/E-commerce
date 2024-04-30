import React, { useState } from 'react'
import styles from '../styles/information.module.css';
interface info {
    details: {
        text: string,
        numbers: number,
        image: string;
    }[];
}
const Information: React.FC<info> = ({ details }) => {
    const [hoveredIndexes, setHoveredIndexes] = useState<number[]>([]);
    const handleMouseEnter = (index: number) => {
        setHoveredIndexes(prevIndexes => [...prevIndexes, index]);
    };

    const handleMouseLeave = (index: number) => {
        setHoveredIndexes(prevIndexes => prevIndexes.filter(i => i !== index));
    };
    return (
        <>
            {details.map((detail, index) => (
                <div key={detail.text} className={`${styles.info}`} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>

                    <div className={styles.image}>
                        <img src={`data:image/png;base64,${detail.image}`} alt={detail.text} />

                    </div>
                    <div className={styles.people}>
                       <h1><b> {detail.numbers}K</b></h1>
                    </div>
                    <div className={styles.title}>
                        <p> {detail.text}</p>
                    </div>
                </div>




            )
            )}



        </>
    )
}
export default Information;
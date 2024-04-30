import styles from "../styles/categories.module.css";
import greaterThan from "../svgs/greaterthan.svg";
const Categories = ()=>{
    return (
        <div className={styles.main}> 
        <div className={styles.categories}>
            <ul>
                <li> Woman's Fashion </li>
                <li> Men's Fashion </li>
                <li> Electronics</li>
                <li> Home & Lifestyle</li>
                <li> Medicine</li>
                <li> Sports & Outdoor</li>
                <li> Baby's & Toys</li>
                <li> Groceries & Pets</li>
                <li> Health & Beauty</li>


            </ul>
        </div>
        <div className={styles.greater}>
        {/* <span>&#62; </span>
        
        <span>&#62; </span> */}
        <img src={greaterThan}/>
        <img src={greaterThan}/>
        </div>
        </div>
    )



}
export default Categories;
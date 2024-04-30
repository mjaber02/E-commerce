import React, { useState } from 'react';
import styles from "../styles/browseByCategory.module.css";

interface CategoryProps {
    categories:{
        title:string;
        image:string;
    }[];
}

 
const BrowseByCategory:React.FC<CategoryProps> = ({categories}) => {
  const [hoveredIndexes, setHoveredIndexes] = useState<number[]>([]);
  const handleMouseEnter = (index: number) => {
    setHoveredIndexes(prevIndexes => [...prevIndexes, index]);
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndexes(prevIndexes => prevIndexes.filter(i => i !== index));
  };
  return (
    <>
    
      {categories.map((category, index) => (
        <div key={category.title} className={styles.category} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
        
            <img src={`data:image/png;base64,${category.image}`} alt={category.title} className={styles.imageStyle}/>
            <p> {category.title}</p>
       
           
          </div>
      ))}
      
    </>
  );
}

export default BrowseByCategory;
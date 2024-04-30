import React, { useState } from 'react';
import styles from "../styles/product.module.css";

interface ProductProps {
  products: {
    title: string;
    price: number;
    discount?: number;
    image: string;
    isDiscountDisplayed:boolean;
  }[];
  // carouselIndex: number
}

const Product: React.FC<ProductProps> = ({ products}) => {
  const [hoveredIndexes, setHoveredIndexes] = useState<number[]>([]);

  const calculateDiscountedPrice = (price: number, discount: number): number => {
    return price - (price * discount) / 100;
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndexes(prevIndexes => [...prevIndexes, index]);
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndexes(prevIndexes => prevIndexes.filter(i => i !== index));
  };

  return (
    <>
    
      {products.map((product, index) => (
        <div key={product.title} className={styles.product} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
          <div className={styles.productImage}>
            <img src={`data:image/png;base64,${product.image}`} alt={product.title} className={styles.imageStyle}/>
            {hoveredIndexes.includes(index) && (
              <div className={styles.addtocart}>
                <button className={styles.addtocartt}>Add to Cart</button>
              </div>
            )}
            {product.isDiscountDisplayed &&
            <span className={styles.discount}>-{product.discount}%</span>
}
          </div>
          <div className={styles.productDetails}>
            <p>{product.title}</p>
            <div className={styles.prices}>
              {product.discount && product.discount > 0 && (
                <div className={styles.discountInfo}>
                  <span className={styles.discountedPrice}>${calculateDiscountedPrice(product.price, product.discount)}</span>
                  <span className={styles.originalPrice}>${product.price}</span>
                </div>
              )}
            </div>
          </div>
       
        </div>
   
      ))}
      
    </>
  );
};

export default Product;

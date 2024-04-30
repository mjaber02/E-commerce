import React from 'react';
import styles from '../styles/about.module.css';
import storyImage from '../svgs/story.png';
import { NavLink } from 'react-router-dom';
import Information from '../maincomponents/information';
const About = () => {
const information =[
  {text:"Sallers active our site",numbers:10.5,image:"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"},
  {text:"Monthly Product Sale",numbers:33,image:"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"},
  {text:"Customer active in our site",numbers:45.5,image:"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"},
  {text:"Anual gross sale in our site",numbers:25,image:"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"},
]
  return (
    <>
    <div className={styles.main}>
    <div className={styles.about}>
      <div className={styles.path}>
        <p><NavLink to="/" className={styles.home}> Home / </NavLink>About</p>
      </div>
      <div className={styles.story}> 
          <h1> Our story</h1>
          <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer. </p>

        </div>
      
          <img src={storyImage} alt="Story Image" className={styles.storyImage}/>


      </div>
   
    </div>
    <div className={styles.information}>
     <Information details={information}/>

   </div>
     
   </>

  )
}

export default About;
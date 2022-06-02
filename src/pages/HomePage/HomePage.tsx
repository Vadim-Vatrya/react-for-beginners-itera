import React from 'react';
import { useContext } from 'react';

import { LanguageContext } from '../../context/LanguageContext';
import useTranslation from '../../hooks/hookTranslation';
import languageUa from '../../data/ukrainian.json';
import languageEn from '../../data/english.json';

import styles from './HomePage.module.scss';


const HomePage = () => {
    const {isTranslated} = useContext(LanguageContext);
    useTranslation();
    const data = isTranslated ? languageUa : languageEn;


    return (
        <>
         <main>
             <section className='wrapper'>
                 <div className='container'>
                     <div className={styles.box}>
                         <h1 className={styles.heading}>{data.name}</h1>
                         <h2 className={styles.subheading}>{data.position}</h2>
                     </div>
                 </div>
             </section>
            
         </main>
        </>
       
    );
};

export default HomePage;
import React from 'react';
import data from '../data/data.json';

import styles from './MyCard.module.scss';

const MyCard: React.FC = () => {
    return (
        <div >
            <div>
                <h1 className={styles.main}>{data.surname}</h1>
            </div>
            <div>
            
                <h2 className={styles.summary}>Summary</h2>
                <p className={styles.text}>{data.summary}</p>
            </div>
            <div>
                <h2 className={styles.summary}>Contacts</h2>
                <div className={styles.contact}>
                         <a className={styles.link} href={data.link1} >
        {data.email}
                </a>
                 <a className={styles.link} href={data.link2} >
        {data.telephone}
                </a>
                 <a className={styles.link} href={data.link3} >
        {data.telegram}
      </a>
            
                </div>    
            </div>
        </div>
    );
};

export default MyCard;
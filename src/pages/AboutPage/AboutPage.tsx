import React from 'react';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import useTranslation from '../../hooks/hookTranslation';

import Contacts from '../../components/Contacts';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Social from '../../components/Social';
import styles from './AboutPage.module.scss';
import img from '../../components/image/photo.jpg';

import languageUa from '../../data/ukrainian.json';
import languageEn from '../../data/english.json';

const AboutPage = () => {
    const { isTranslated } = useContext(LanguageContext);
    useTranslation();
    const data = isTranslated ? languageUa : languageEn;
  
    return (
        <>
        <main>
      <section className="wrapper">
        <div className="container">
          <div className={styles.grid}>
            <div className={`${styles.card} ${styles.lilac}`}>
              <div className={styles.cardInner}>
                <img className={styles.image} src={img} alt="" />
                <div className={styles.cardHeader}>
                  <h1 className={styles.heading}>{data.name}</h1>
                  <h2 className={styles.subheading}>{data.position}</h2>
                </div>
              </div>
            </div>

            <div className={`${styles.card} ${styles.green}`}>
              <Heading>{data.aboutHeading}</Heading>
              <Paragraph>{data.aboutText}</Paragraph>
            </div>

            <div className={`${styles.card} ${styles.peach}`}>
              <Heading>{data.skillsHeading}</Heading>
              <Paragraph>{data.skillsText}</Paragraph>
            </div>

            <div className={`${styles.card} ${styles.cyan}`}>
              <Heading>{data.contactsHeading}</Heading>
              <Paragraph>
                <Contacts data={data.contactsLinks} />
                <Social data={data.socialLinks} />
              </Paragraph>
            </div>
          </div>
        </div>
      </section>
    </main>    
        </>
    );
};

export default AboutPage;
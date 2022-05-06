import React from 'react';
import styles from './Footer.module.scss'; 

type FooterProps = {
  copyright: string;
};

export const Footer: React.FC<FooterProps> = (props) => {
    return (
        <footer className={styles.footer}>Footer {props.copyright}</footer>
    );
};
  
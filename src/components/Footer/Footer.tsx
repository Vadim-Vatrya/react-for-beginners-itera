import {FC} from 'react';
import styles from './Footer.module.scss'; 



const Footer: FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerInner}>
          <a 
          className={styles.link}
          href="https://github.com/Vadim-Vatrya/"
          rel="noreferrer noopener">
          Coded with ❤ by Vadim Vatrya.
          </a>
          </div>
        </div>
      </footer>
    </>
  )
};

export default Footer;

// type FooterProps = {
//   copyright: string;
// };

// export const Footer: React.FC<FooterProps> = (props) => {
//     return (
//         <footer className={styles.footer}>Footer {props.copyright}</footer>
//     );
// };
  
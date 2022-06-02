// Social
import { FC } from 'react';
import { LinkTypes } from '../../types';
import styles from './styles.module.scss';

const Social: FC<LinkTypes> = (props) => {
  return (
    <ul className={styles.social}>
      {props.data.map((item, idx) => (
        <li key={idx}>
          <a className={styles.link} href={item.href}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
};

export default Social;

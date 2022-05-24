import { FC } from 'react';
import styles from '../MyCard/MyCard.module.scss';

type SummaryType = {
  summary: string;
};

const Summary: FC<SummaryType> = props => {
  return (
    <>
      <div>
        <h2 className={styles.summary}>Summary</h2>
        <p className={styles.text}>{props.summary}</p>
      </div>
    </>
  );
};

export default Summary;

import { FC } from "react";
import styles from '../MyCard/MyCard.module.scss';

type NameType = ({
    name: string,
});


const MyName: FC<NameType> = (props) => {
  return (
    <>
       <h1 className={styles.main}>{props.name}</h1>
    </>
  );
};

export default MyName;

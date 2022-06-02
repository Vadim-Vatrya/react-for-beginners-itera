import React from 'react';
// import { dataEn, dataUa } from '../../data/data';
import { useParams } from 'react-router-dom';

import MyName from '../MyName/MyName';
import Summary from '../Summary/Summary';
import Contacts from '../Contacts/Contacts';

// import styles from './MyCard.module.scss';

const MyCard = () => {
  // const ln = useParams();
  // const data = ln === 'en' ? dataEn : dataUa;

  return (
    <>
      {/* <MyName name={data.name} />
      <Summary summary={data.summary} />
      <Contacts
        email={data.email}
        phone={data.telephone}
        telegram={data.telegram}
      /> */}
    </>
  );
};

export default MyCard;

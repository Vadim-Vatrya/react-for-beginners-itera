import {FC} from 'react';import styles from '../MyCard/MyCard.module.scss';

type ContactsType = { email: string, phone: string, telegram: string }

const Contacts: FC<ContactsType> = (props) => {
  return (
      <>
        <h2 className={styles.summary}>Contacts</h2>
                <div className={styles.contact}>
                    <li>
                        <ul>
                            <p>{props.email}</p>
                        </ul>
                        <ul>
                            {props.phone}
                        </ul>
                        <ul>
                            {props.telegram}
                        </ul>
                    </li>
                         {/* <a className={styles.link} href={data.link1} >
        {data.email}
                </a>
                 <a className={styles.link} href={data.link2} >
        {data.telephone}
                </a>
                 <a className={styles.link} href={data.link3} >
        {data.telegram}
      </a> */}
      </div>
      </>
    
              

   
  )
};

export default Contacts;

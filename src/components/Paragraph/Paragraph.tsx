// Paragraph
import { FC, ReactNode } from 'react'
import styles from './styles.module.scss'

type Props = {
  children: ReactNode | string
};

const Paragraph: FC<Props> = (props) => {
  return <p className={styles.paragraph}>{props.children}</p>
}

export default Paragraph;

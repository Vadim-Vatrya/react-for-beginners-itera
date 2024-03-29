import { FC } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Header.module.scss'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
]

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.headerInner}>
          <ul className={styles.links}>
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <NavLink className={styles.link} to={link.to}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={styles.links}>
            <Link className={styles.langLink} to="?">
              <svg width="1.2rem" height="1.2rem" viewBox="0 0 64 64">
                <path
                  d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M13.265 52.788a28.31 28.31 0 0 1-1.384-1.344l10.286-7.575v-2.036h-3.89l-8.938 6.585a28.01 28.01 0 0 1-2.751-4.682l2.584-1.903H5.787a27.693 27.693 0 0 1-1.156-3.934H26.1V59.369a27.772 27.772 0 0 1-3.933-1.156V46.227l-8.902 6.561M37.9 23.039V4.631c1.35.291 2.663.678 3.933 1.156v11.985l8.901-6.561c.478.431.937.881 1.384 1.344L41.833 20.13v2.036h3.888l8.939-6.584a27.964 27.964 0 0 1 2.751 4.68l-2.585 1.904h3.387a27.693 27.693 0 0 1 1.156 3.934H37.9v-3.061M13.239 11.234l8.926 6.559l.002-12.006A27.772 27.772 0 0 1 26.1 4.631V26.1H4.631c.291-1.35.678-2.663 1.156-3.934h3.387l-2.585-1.904c.249-.538.509-1.07.791-1.589l4.738 3.493l6.644-.001l-9.256-6.818a28.234 28.234 0 0 1 3.733-4.113m37.522 41.532l-8.926-6.56l-.002 12.007c-1.27.479-2.583.865-3.933 1.156v-21.47h21.469a27.824 27.824 0 0 1-1.156 3.934h-3.389l2.587 1.905a27.937 27.937 0 0 1-.791 1.588l-4.738-3.493l-6.646.001l9.258 6.818a28.19 28.19 0 0 1-3.733 4.114"
                  fill="currentColor"
                ></path>
              </svg>
              EN
            </Link>
            <Link className={styles.langLink} to="?ln=ua">
              <svg width="1.2rem" height="1.2rem" viewBox="0 0 64 64">
                <path
                  d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 58C16.561 60 4 47.439 4 32h56c0 15.439-12.561 28-28 28"
                  fill="currentColor"
                ></path>
              </svg>
              UA
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;

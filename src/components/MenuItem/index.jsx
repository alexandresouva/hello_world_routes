import { NavLink } from 'react-router-dom';
import styles from './MenuItem.module.css';

const MenuItem = ({ pathname, children }) => {
  return (
    <NavLink
      to={pathname}
      className={({ isActive }) =>
        isActive
          ? `${styles['item']} ${styles['item--selected']}`
          : `${styles['item']}`
      }
      end
    >
      {children}
    </NavLink>
  );
};

export default MenuItem;

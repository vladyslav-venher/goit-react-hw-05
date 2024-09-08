import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const getNavLinkClass = props => {
  return clsx(css.link, props.isActive && css.active);
};

export default function Navigation() {
  return (
    <ul className={css.header}>
      <li>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={getNavLinkClass}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
}

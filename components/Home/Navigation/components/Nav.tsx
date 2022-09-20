import { NextPage } from 'next';

const Nav:NextPage<{nav: string, className: string}> = ({nav, className}) => (
  <li
    className={`${className} font-semibold`}
  >
    {nav}
  </li>
);

export default Nav;
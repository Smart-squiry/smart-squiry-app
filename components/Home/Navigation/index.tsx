import { Button } from '../..';
import { Logo, Nav } from './components';

const navs: string[] = ['Home', 'About', 'Services'];

const Navigation = () => (
  <div className='flex justify-between items-center mt-3 px-10'>
    <Logo />
    <ul className='flex gap-x-20 list-none'>
      {navs.map((nav) => (
        <Nav
          nav={nav}
          key={nav}
          className={navs.length - 1 ? 'mr-0' : 'mr-2'}
        />
      ))}
    </ul>
    <Button>Contact Us</Button>
  </div>
);

export default Navigation;

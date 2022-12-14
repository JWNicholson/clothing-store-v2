import { Outlet, Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../../assets/logo.svg';

import './navigation.styles.scss';

function Navigation() {
  return (
    <>
    <div className='navigation'>
      <Link to={'/'} className='logo-container'>
      <div><Logo className='logo'/></div>
      </Link>
      
      <div className='nav-links-container'>
        <Link to={'/shop'} className='nav-link'>SHOP</Link>
        <Link to={'/sign-in'} className='nav-link'>SIGN IN</Link>
      </div>
    </div>
    <Outlet />
  </>
  );
}

export default Navigation;
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
        <Link to={'/shop'} className='nave-link'>SHOP</Link>
      </div>
    </div>
    <Outlet />
  </>
  );
}

export default Navigation;
import { useState } from 'react';
import { CubeTransparentIcon, MenuAlt3Icon } from '@heroicons/react/outline';

import NavbarLink from './NavbarLink';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarBehavior = () => setNavbarOpen(!navbarOpen);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
          <CubeTransparentIcon className="navbar__brand-icon" />
          <span>Shopiland</span>
        </div>
        <MenuAlt3Icon data-testid="nav-icon" className="navbar__icon" onClick={handleNavbarBehavior} />
        <div data-testid="nav-collapse"  className={`navbar__collapse ${navbarOpen && 'navbar__collapse--open'}`}>
          <ul className="navbar__menu">
            <NavbarLink text="Home" selected/>
            <NavbarLink text="About" />
            <NavbarLink text="Contact" />
            <NavbarLink text="Cart" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { CubeTransparentIcon, MenuAlt3Icon } from '@heroicons/react/outline';
import { useState } from 'react';

interface NavbarLinkProps {
  text: string;
  selected?: boolean;
}

const NavbarLink = ({ text, selected = false }: NavbarLinkProps) => {
  return (
    <li>
      <a className={`md:p-4 py-2 block hover:text-slate-400 ${selected && 'text-slate-500'}`} href="#">
        { text }
      </a>
    </li>
  );
};

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarBehavior = () => setNavbarOpen(!navbarOpen);

  return (
    <div className="flex justify-center w-full sticky top-0 bg-white text-lg text-gray-900">
      <nav className="flex flex-grow flex-wrap justify-between items-center max-w-7xl py-4 px-4">
        <div className="flex items-center uppercase text-2xl font-extrabold cursor-pointer">
          <CubeTransparentIcon className="h-6 w-6 text-slate-500 mr-3" />
          <span>Shopiland</span>
        </div>
        <MenuAlt3Icon className="h-7 w-7 text-slate-700 cursor-pointer block md:hidden" onClick={handleNavbarBehavior} />
        <div className={`${navbarOpen ? 'flex': 'hidden'} md:flex md:items-center w-full md:w-auto`}>
          <ul className="text-base text-gray-700 pt-4 md:flex md:justify-between md:pt-0">
            <NavbarLink text="Home" selected/>
            <NavbarLink text="About" />
            <NavbarLink text="Contact" />
            <NavbarLink text="Cart" />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

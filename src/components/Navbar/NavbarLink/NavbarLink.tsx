interface NavbarLinkProps {
  text: string;
  selected?: boolean;
}

const NavbarLink = ({ text, selected = false }: NavbarLinkProps) => {
  return (
    <li>
      <a className={`nav-link ${selected && 'nav-link--selected'}`} href="#">
        { text }
      </a>
    </li>
  );
};

export default NavbarLink;
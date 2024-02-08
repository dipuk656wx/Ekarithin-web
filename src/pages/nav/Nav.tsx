import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-white text-xl font-bold">Ekarikthin</span>
          </div>
          <div className="flex space-x-4">
            <NavLink to="/" label="Home" />
            <NavLink to="/registration" label="Registration" />
            <NavLink to="/events" label="Events" />
            <NavLink to="/gallery" label="Gallery" />
            <NavLink to="/organiser" label="organiser" />
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
    >
      {label}
    </Link>
  );
};

export default NavBar;

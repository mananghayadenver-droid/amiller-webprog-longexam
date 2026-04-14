import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-200',
    isActive
      ? 'bg-indigo-600 text-white shadow-md'
      : 'text-zinc-300 hover:bg-zinc-800 hover:text-white',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={"https://th.bing.com/th?id=OIF.%2b1p4M8HRiOMgcdOW9pgooQ&w=280&h=180&c=7&r=0&o=7&pid=1.7&rm=3"}
            alt="Readora"
            className="h-10 w-10 rounded-full border border-zinc-700 bg-white object-contain"
          />
          <p className="text-lg font-bold text-white tracking-wide">
            Readora
          </p>
        </NavLink>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-3 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/login"
            className="rounded-full border border-zinc-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-zinc-300 hover:bg-zinc-800 hover:text-white transition"
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white hover:bg-indigo-500 transition shadow-md"
          >
            Sign Up
          </NavLink>
        </div>

      </div>
    </header>
  );
};

export default NavBar;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ChurchLogo from '../ChurchLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
      <div className="church-container">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <ChurchLogo className="h-12 w-auto" />
            <div>
              <h1 className="font-serif text-church-purple text-xl font-bold leading-tight">St. Michael's</h1>
              <p className="text-sm text-muted-foreground">Catholic Church</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLinks />
          </nav>

          {/* Sunday Mass Button - Desktop */}
          <div className="hidden md:block">
            <Button className="bg-church-burgundy hover:bg-church-burgundy/90">
              Sunday Mass
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-church-purple"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="church-container py-4 flex flex-col space-y-4">
            <nav className="flex flex-col space-y-3">
              <NavLinks mobile onClick={toggleMenu} />
            </nav>
            <Button className="bg-church-burgundy hover:bg-church-burgundy/90 w-full">
              Sunday Mass
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false, onClick = () => {} }) => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Mass Times', path: '/mass-times' },
    { name: 'Announcements', path: '/announcements' },
    { name: 'Contact', path: '/contact' },
  ];

  return links.map((link) => (
    <Link
      key={link.name}
      to={link.path}
      className={`${
        mobile
          ? 'block py-2 px-4 hover:bg-muted rounded-md font-medium'
          : 'text-church-purple hover:text-church-burgundy transition-colors font-medium'
      }`}
      onClick={onClick}
    >
      {link.name}
    </Link>
  ));
};

export default Header;

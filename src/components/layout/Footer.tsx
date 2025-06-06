
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import ChurchLogo from '../ChurchLogo';

const Footer = () => {
  return (
    <footer className="bg-church-purple text-white">
      <div className="church-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Church Info */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <ChurchLogo className="h-10 w-auto text-white" />
              <div>
                <h3 className="font-serif text-xl font-bold">St. Michael's</h3>
                <p className="text-sm text-white/80">Catholic Church</p>
              </div>
            </div>
            <p className="text-white/80 max-w-md">
              Our parish is a vibrant community dedicated to spreading the gospel and serving others in Christ's name.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" aria-label="Facebook" className="text-white hover:text-church-gold transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-church-gold transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-white hover:text-church-gold transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-church-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-church-gold transition-colors">About Us</Link></li>
              <li><Link to="/mass-times" className="hover:text-church-gold transition-colors">Mass Times</Link></li>
              <li><Link to="/announcements" className="hover:text-church-gold transition-colors">Announcements</Link></li>
              <li><Link to="/contact" className="hover:text-church-gold transition-colors">Contact</Link></li>
              <li><Link to="/sacraments" className="hover:text-church-gold transition-colors">Sacraments</Link></li>
              <li><Link to="/ministries" className="hover:text-church-gold transition-colors">Ministries</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-church-gold shrink-0 mt-0.5" />
                <span>123 Catholic Church St.<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-church-gold shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-church-gold shrink-0" />
                <a href="mailto:info@stmichaels.church" className="hover:text-church-gold transition-colors">
                  info@stmichaels.church
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} St. Michael's Catholic Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { BRAND_NAME } from "@/lib/constants";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full bg-white z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className="text-primary mr-2 text-3xl">
            <i className="fas fa-utensils"></i>
          </div>
          <span className="text-xl font-bold font-playfair text-primary">{BRAND_NAME}</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => handleNavLinkClick('about')}
            className="font-poppins text-neutral-900 hover:text-primary transition-colors duration-300"
          >
            About Us
          </button>
          <button 
            onClick={() => handleNavLinkClick('menu')}
            className="font-poppins text-neutral-900 hover:text-primary transition-colors duration-300"
          >
            Menu
          </button>
          <button 
            onClick={() => handleNavLinkClick('contact')}
            className="font-poppins text-neutral-900 hover:text-primary transition-colors duration-300"
          >
            Contact Us
          </button>
        </div>
        
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-neutral-900 focus:outline-none">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white px-4 py-2 shadow-md ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <button 
          onClick={() => handleNavLinkClick('about')}
          className="block w-full text-left py-2 text-neutral-900 hover:text-primary"
        >
          About Us
        </button>
        <button 
          onClick={() => handleNavLinkClick('menu')}
          className="block w-full text-left py-2 text-neutral-900 hover:text-primary"
        >
          Menu
        </button>
        <button 
          onClick={() => handleNavLinkClick('contact')}
          className="block w-full text-left py-2 text-neutral-900 hover:text-primary"
        >
          Contact Us
        </button>
      </div>
    </header>
  );
}

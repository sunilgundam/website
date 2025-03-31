import { BRAND_NAME, RESTAURANT_DETAILS } from "@/lib/constants";

export default function Footer() {
  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-yellow-500">{BRAND_NAME}</h3>
            <p className="text-neutral-400 mb-4">Serving delicious Indian and Chinese cuisine with love and passion. Visit us for an unforgettable dining experience.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-500 transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-yellow-500 transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-yellow-500 transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-yellow-500 transition-colors duration-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-yellow-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigateToSection('hero')}
                  className="text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('about')}
                  className="text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('menu')}
                  className="text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('contact')}
                  className="text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-yellow-500">Contact Info</h3>
            <ul className="space-y-3 text-neutral-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-yellow-500"></i>
                <span>{RESTAURANT_DETAILS.address}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-yellow-500"></i>
                <span>+91 {RESTAURANT_DETAILS.phoneNumbers[0]}, +91 {RESTAURANT_DETAILS.phoneNumbers[1]}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-yellow-500"></i>
                <span>{RESTAURANT_DETAILS.email}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-yellow-500">Opening Hours</h3>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday:</span>
                <span>11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Holidays:</span>
                <span>11:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-10 pt-6 text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

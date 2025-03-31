import { useState, useEffect, useRef } from "react";
import { BRAND_NAME } from "@/lib/constants";

const CAROUSEL_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    alt: "Delicious Biryani",
    title: "Authentic Flavors",
    subtitle: "Experience the true taste of Indian cuisine",
    ctaText: "View Our Menu",
    ctaLink: "#menu"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    alt: "Delicious Starters",
    title: "Mouth-Watering Starters",
    subtitle: "Begin your culinary journey with our delicious appetizers",
    ctaText: "Explore Starters",
    ctaLink: "#menu"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1563379091-76af3759331c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    alt: "Chinese Specialties",
    title: "Chinese Specialties",
    subtitle: "Taste our delicious Rice and Noodle preparations",
    ctaText: "View Chinese Menu",
    ctaLink: "#menu"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    alt: "Pizza and Burger Special",
    title: "Pizza & Burger Special",
    subtitle: "Indulge in our perfectly crafted burgers and pizzas",
    ctaText: "Try Our Specials",
    ctaLink: "#menu"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1542384557-0824d90731ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    alt: "Premium Beverages",
    title: "Refreshing Beverages",
    subtitle: "Complete your meal with our selection of drinks",
    ctaText: "View Beverages",
    ctaLink: "#menu"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const totalSlides = CAROUSEL_SLIDES.length;
  
  const startAutoSlide = () => {
    intervalRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
  };
  
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);
  
  const goToSlide = (index: number) => {
    stopAutoSlide();
    setCurrentSlide(index);
    startAutoSlide();
  };
  
  const goToPrevSlide = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    startAutoSlide();
  };
  
  const goToNextSlide = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    startAutoSlide();
  };
  
  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-16 mt-0" id="hero">
      <div className="relative overflow-hidden h-[70vh] w-full">
        <div 
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${totalSlides * 100}%` }}
        >
          {CAROUSEL_SLIDES.map((slide) => (
            <div 
              key={slide.id}
              className="flex-shrink-0 w-full h-full relative"
              style={{ width: `${100 / totalSlides}%` }}
            >
              <img 
                src={slide.image} 
                alt={slide.alt} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center px-4">
                  <h1 className="text-4xl md:text-6xl font-bold font-playfair text-white mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    {slide.subtitle}
                  </p>
                  <button 
                    onClick={() => navigateToSection(slide.ctaLink)}
                    className="bg-primary text-white font-poppins px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
                  >
                    {slide.ctaText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Carousel Controls */}
        <button 
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-300"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button 
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-300"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {CAROUSEL_SLIDES.map((_, index) => (
            <button 
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full bg-white hover:bg-opacity-100 transition-all duration-300 ${index === currentSlide ? 'bg-opacity-80' : 'bg-opacity-50'}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

import { BRAND_NAME } from "@/lib/constants";

export default function WelcomeSection() {
  return (
    <section
      className="py-16 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1606503396013-8959c322f7b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 
            className="text-3xl md:text-4xl font-bold font-playfair mb-6" 
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Welcome to {BRAND_NAME}
          </h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Discover the authentic taste of Indian and Chinese cuisine at {BRAND_NAME}. Our passion for food translates into every dish we serve, bringing you a delightful culinary experience that will tantalize your taste buds and leave you craving for more.
          </p>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Each dish is prepared with love, using the freshest ingredients and traditional recipes passed down through generations. Whether you're in the mood for spicy biryani, flavorful starters, or comforting Chinese dishes, our diverse menu has something for everyone.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('menu');
              if (element) {
                const yOffset = -80;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="inline-block bg-primary hover:bg-opacity-90 text-white font-poppins px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Explore Our Menu
          </button>
        </div>
      </div>
    </section>
  );
}

import { BRAND_NAME } from "@/lib/constants";

const RESTAURANT_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
    alt: "SS Crave Kitchen Restaurant Interior"
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
    alt: "SS Crave Kitchen Chef Preparing Food"
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
    alt: "SS Crave Kitchen Dining Area"
  },
  {
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
    alt: "SS Crave Kitchen Food Preparation"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12 text-primary">About Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {RESTAURANT_IMAGES.map((image, index) => (
            <div key={index} className="w-full h-64 overflow-hidden rounded-lg shadow-md">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              />
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6 leading-relaxed">
            Founded with a passion for authentic flavors, <strong>{BRAND_NAME}</strong> brings together the best of traditional and modern culinary techniques to create an unforgettable dining experience in Hyderabad.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Our team of experienced chefs is dedicated to crafting dishes that not only satisfy your hunger but also tell a story through flavors. We believe that good food brings people together, creating memories that last a lifetime.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            At {BRAND_NAME}, we are committed to using only the freshest ingredients, preparing each dish with care and attention to detail. Our recipes have been perfected over time, ensuring that every bite delivers the authentic taste you crave.
          </p>
          <p className="text-lg font-medium text-primary">
            We don't just serve food; we serve experiences. Come join us and discover why our customers keep coming back for more.
          </p>
        </div>
      </div>
    </section>
  );
}

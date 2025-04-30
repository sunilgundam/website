import { useState, useEffect } from "react";
import { MenuCategory, MenuCategories } from "@/lib/types";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("starters");

  // useEffect to remove prices with DOM manipulation
  useEffect(() => {
    // Process will happen after initial render
    const processMenuItems = () => {
      const menuElements = document.querySelectorAll('.menu-category li');
      menuElements.forEach(item => {
        // Remove the price span if it exists
        const priceSpan = item.querySelector('span.text-primary');
        if (priceSpan) {
          priceSpan.remove();
        }
        
        // Remove the justify-between class
        if (item.classList.contains('flex') && item.classList.contains('justify-between')) {
          item.classList.remove('justify-between');
        }
      });
    };
    
    // Small delay to ensure DOM is fully updated
    setTimeout(processMenuItems, 100);
  }, [activeCategory]); // Re-run when category changes

  const handleCategoryClick = (category: MenuCategory) => {
    setActiveCategory(category);
  };

  return (
    <section id="menu" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12 text-primary">Our Menu</h2>
        
        {/* Menu Category Navigation */}
        <div className="flex flex-wrap justify-center mb-10 overflow-x-auto">
          {Object.keys(MenuCategories).map((category) => (
            <button 
              key={category}
              onClick={() => handleCategoryClick(category as MenuCategory)}
              className={`py-2 px-4 rounded-t-lg mx-1 mb-2 font-poppins transition-colors duration-300 ${
                activeCategory === category ? 'bg-[#F0C808] text-neutral-900' : 'bg-neutral-900 text-white'
              }`}
            >
              {MenuCategories[category as MenuCategory]}
            </button>
          ))}
        </div>
        
        {/* Menu Content */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Starters Section */}
          {activeCategory === "starters" && (
            <div className="menu-category">
              <div className="flex flex-col md:flex-row mb-8">
                <div className="w-full md:w-1/2 md:pr-6 mb-6 md:mb-0">
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Veg Starters</h3>
                  <ul className="space-y-3">
                    <li><span>Veg Manchuria</span></li>
                    <li className="flex justify-between"><span>Veg 65</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chilli Veg</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Gobi Manchuria</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Gobi 65</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Paneer Manchuria</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Paneer 65</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chilli Paneer</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chilli Garlic Paneer</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Schezwan Paneer</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Paneer Majestic</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Baby Corn Manchuria</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Baby Corn 65</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chilli Baby Corn</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Baby Corn Majestic</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Mushroom Manchuria</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Mushroom 65</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chilli Mushroom</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 md:pl-6">
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Non-Veg Starters</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Egg Manchuria</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Egg 65</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chilli Egg</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Egg Roast</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Egg Schezwan</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken Manchuria</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken 65</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chilli Chicken</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken Majestic</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken Lollipops</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken Drumsticks</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Lemon Chicken</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Dragon Chicken</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Apollo Fish</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Fish Manchuria</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Fish 65</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Prawns Manchuria</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Prawns 65</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {/* Chinese Rice/Noodles Section */}
          {activeCategory === "chinese" && (
            <div className="menu-category">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Veg Rice/Noodles</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Veg Fried Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Veg Soft Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Veg Schezwan Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Veg Manchuria Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Veg Chilli Garlic Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Paneer Schezwan Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Kaju Paneer Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Mushroom Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Egg Rice/Noodles</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Egg Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Egg Soft Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Egg Schezwan Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>DOB Egg Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Egg Chilli Garlic Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Chicken Rice/Noodles</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Chicken Fried Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken Soft Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>DOB Egg Chicken Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>DOB Chicken Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken Schezwan Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chilli Garlic Chicken Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Mixed Non-Veg Rice/Noodles</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {/* Roti Curries Section */}
          {activeCategory === "roti" && (
            <div className="menu-category">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Roti</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Chapati</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Phulka</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Parota</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                  
                  <h3 className="text-2xl font-playfair font-bold mb-4 mt-8 text-primary pb-2 border-b border-neutral-200">Veg Curries</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Kadai Veg</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Methi Chaman</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Mixed Veg Curry</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Kadai Paneer</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Paneer Butter Masala</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Kaju Paneer</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Kaju Curry</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Mushroom Curry</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Chicken Curries</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Chicken Curry</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Telangana Chicken</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Andhra Chicken</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Butter Chicken</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Kadai Chicken</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Kaju Chicken</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken Masala</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken Moghlai</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken Afgani</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Sea Food Curries</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Fish Curry</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Fish Masala</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Prawn Curry</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Telangana Prawn</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Andhra Prawns</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {/* Biryani Section */}
          {activeCategory === "biryani" && (
            <div className="menu-category">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Veg Biryani</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Veg Biryani</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Paneer Biryani</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Kaju Biryani</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                  
                  <h3 className="text-2xl font-playfair font-bold mb-4 mt-8 text-primary pb-2 border-b border-neutral-200">Egg Biryani</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Egg Biryani</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Non-Veg Biryani</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Chicken Biryani</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken Fry Piece Biryani</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken 65 Biryani</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Moghlai Biryani</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Lollipop Biryani</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Sea Food Biryani</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Fish Biryani</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Prawn Biryani</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                  
                  <h3 className="text-2xl font-playfair font-bold mb-4 mt-8 text-primary pb-2 border-b border-neutral-200">Extra Rice/Piece</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Extra Biryani Rice</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Extra Chicken Dum Piece</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {/* Combo Offers Section */}
          {activeCategory === "combo" && (
            <div className="menu-category">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Veg Combo</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Paneer/Mushroom Manchuria + Mojito</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Paneer/Mushroom 65 + Mojito</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Paneer/Mushroom Biryani</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Paneer Manchuria + Mushroom 65 + Biryani + Vanilla Ice Cream</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Veg Manchurian Fried Rice/Noodles (Full) + Mojito</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Paneer/Mushroom Fried Rice/Noodles + Mojito</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Chicken Combo</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Chicken Manchurian/65 + Mojito</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken Manchurian/65 + Chicken Biryani Full</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken Manchurian/65 + Chicken Biryani Full + Ice Cream/Mojito</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken Biryani Full + Paneer/Mushroom Biryani Full</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                  
                  <h3 className="text-2xl font-playfair font-bold mb-4 mt-8 text-primary pb-2 border-b border-neutral-200">Mix Combo</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Chicken Fried Rice/Noodles (Full) + Paneer/Mushroom Fried Rice/Noodles + Mojito</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {/* Pizza/Burger/Sandwich Section */}
          {activeCategory === "pbs" && (
            <div className="menu-category">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Cup Pizza</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Cheese Cup Pizza</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Veg Cup Pizza</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Paneer Cup Pizza</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken Cup Pizza</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Prawn Cup Pizza</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Burger</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Veg Cheese Burger</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Veg Double Cheese Burger</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Egg Cheese Burger</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Egg Double Cheese Burger</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken Cheese Burger</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken Double Cheese Burger</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Sandwich</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Veg Sandwich</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Veg Cheese Sandwich</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Egg Sandwich</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Egg Cheese Sandwich</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken Sandwich</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chicken Cheese Sandwich</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {/* Beverages Section */}
          {activeCategory === "beverages" && (
            <div className="menu-category">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Milkshakes</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Oreo Shake</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chocolate Shake</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>KitKat Shake</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Butterscotch Shake</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Mango Shake</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Dryfruit Shake</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Mojito</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Pineapple Mojito</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Strawberry Mojito</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Watermelon Mojito</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Green Apple Mojito</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Cranberry Mojito</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Virgin Mojito</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Lassis</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Sweet Lassi</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Rose Lassi</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chocolate Lassi</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Dry Fruit Lassi</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Ice Creams</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Vanilla</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Butterscotch</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Chocolate</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary pb-2 border-b border-neutral-200">Drinks</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span>Cooldrinks</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Water Bottle 500ml</span> <span className="text-primary font-semibold"></span></li>
                    <li className="flex justify-between"><span>Water Bottle 1L</span> <span className="text-primary font-semibold"></span></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

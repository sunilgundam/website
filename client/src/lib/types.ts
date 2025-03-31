export type MenuCategory = "starters" | "chinese" | "roti" | "biryani" | "combo" | "pbs" | "beverages";

export const MenuCategories: Record<MenuCategory, string> = {
  starters: "Starters",
  chinese: "Chinese Rice/Noodles",
  roti: "Roti Curries",
  biryani: "Biryani",
  combo: "Combo Offers",
  pbs: "Pizza/Burger/Sandwich",
  beverages: "Beverages"
};

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

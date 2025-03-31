export type MenuCategory = "starters" | "chinese" | "roti" | "biryani" | "combo";

export const MenuCategories: Record<MenuCategory, string> = {
  starters: "Starters",
  chinese: "Chinese Rice/Noodles",
  roti: "Roti Curries",
  biryani: "Biryani",
  combo: "Combo Offers"
};

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

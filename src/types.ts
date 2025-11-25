export type Category = 'Sweets' | 'Savory' | 'Juices' | 'Drinks' | 'Combos';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  isFeatured?: boolean;
}

export interface JuiceItem {
  id: string;
  name: string;
  ingredients: string[];
  volume: string;
  price: number;
  colorCode: string; // For the visual representation of the juice
  image: string;
}

export interface SocialPost {
  id: number;
  image: string;
  caption: string;
}
import { MenuItem, JuiceItem, SocialPost } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Bubble Waffle — Classic',
    description: 'Caramel drizzle, powdered sugar, vanilla bean ice cream.',
    price: 45,
    category: 'Sweets',
    image: 'https://images.unsplash.com/photo-1562608420-13ae7df0987c?q=80&w=800&auto=format&fit=crop', // Waffle
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Belgian Waffle — Berry',
    description: 'Fresh seasonal berries, whipped mascarpone, maple syrup.',
    price: 55,
    category: 'Sweets',
    image: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=800&auto=format&fit=crop', // Waffle with berries
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Churros Box',
    description: '6 golden crispy pieces served with rich dark chocolate dip.',
    price: 35,
    category: 'Sweets',
    image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop', // Churros
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Flatbread Chicken',
    description: 'Grilled chicken, light herb mayo, fresh salad greens.',
    price: 40,
    category: 'Savory',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop', // Sandwich
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Crêpe — Nutella & Banana',
    description: 'Classic French crêpe folded with hazelnut spread and banana slices.',
    price: 40,
    category: 'Sweets',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=800&auto=format&fit=crop', // Crepe
    isFeatured: false,
  },
  {
    id: '6',
    name: 'Iced Coffee',
    description: 'Cold brew 24h, choice of oat, almond or dairy milk.',
    price: 28,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?q=80&w=800&auto=format&fit=crop', // Iced Coffee
    isFeatured: false,
  },
  {
    id: '7',
    name: 'Avocado Toast',
    description: 'Sourdough, smashed avocado, chili flakes, poached egg.',
    price: 45,
    category: 'Savory',
    image: 'https://images.unsplash.com/photo-1588137372308-15f75323ca8d?q=80&w=800&auto=format&fit=crop', // Toast
    isFeatured: false,
  },
  {
    id: '8',
    name: 'LIFE — Glow',
    description: 'Orange, carrot, pineapple, ginger.',
    price: 25,
    category: 'Juices',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format&fit=crop', // Orange Juice
    isFeatured: true,
  },
  {
    id: '9',
    name: 'LIFE — Green Reset',
    description: 'Apple, cucumber, spinach, lemon, mint.',
    price: 25,
    category: 'Juices',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=800&auto=format&fit=crop', // Green Juice
    isFeatured: false,
  },
];

export const LIFE_JUICES: JuiceItem[] = [
  {
    id: 'j1',
    name: 'LIFE — Glow',
    ingredients: ['Orange', 'Carrot', 'Pineapple', 'Ginger'],
    volume: '300ml',
    price: 25,
    colorCode: '#FF9E44', 
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'j2',
    name: 'LIFE — Green Reset',
    ingredients: ['Apple', 'Cucumber', 'Spinach', 'Lemon', 'Mint'],
    volume: '300ml',
    price: 25,
    colorCode: '#98C15D',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'j3',
    name: 'LIFE — Berry Boost',
    ingredients: ['Strawberry', 'Blueberry', 'Apple', 'Beetroot'],
    volume: '300ml',
    price: 25,
    colorCode: '#D6425E',
    image: 'https://images.unsplash.com/photo-1615478503562-ec2d8dd0e676?q=80&w=600&auto=format&fit=crop',
  },
];

export const INSTAGRAM_POSTS: SocialPost[] = [
  { id: 1, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop', caption: 'Latte Art' },
  { id: 2, image: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=600&auto=format&fit=crop', caption: 'Cone walk' },
  { id: 3, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop', caption: 'Restaurant vibes' },
  { id: 4, image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=600&auto=format&fit=crop', caption: 'Fresh start' },
];
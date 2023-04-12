export interface ProductInterface {
  id: number;
  name: string;
  price: number;
  units_available: number;
  description: string;
  main_image: string;
  is_promotion: boolean;
  promotion_price: number;
  status: boolean;
  created_at: string;
  updated_at: string;
  category: number;
  category_name: string;
  user_name: string;
  user: number;
}

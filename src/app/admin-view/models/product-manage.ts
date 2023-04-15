export interface ProductManageInterface {
  id: number;
  name: string;
  price: number | null;
  units_available: number | null;
  description: string;
  main_image: string;
  is_promotion: boolean;
  promotion_price: number | null;
  status: boolean;
  created_at: string;
  updated_at: string;
  category: number;
  user: number;
}

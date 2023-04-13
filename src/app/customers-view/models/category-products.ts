import {CategoryInterface} from "./category";
import {ProductInterface} from "./product";

export interface CategoryProductsInterface {
  category: CategoryInterface;
  products: ProductInterface[];
}

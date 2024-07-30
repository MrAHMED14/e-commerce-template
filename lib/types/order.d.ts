import { ShoppingCart } from "./cart"

export interface Address {
  street: string
  // city: string;
  // state: string;
  // postalCode: string;
  // country: string;
}

export interface OrderRequest {
  userId: string
  order: ShoppingCart
  address: Address
}

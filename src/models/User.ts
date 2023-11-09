import { Restaurant } from "./Restaurant";
import { BasicPricingStrategy, Order } from "./Order";
import { FoodItem } from "./FoodItem";

export class User {
  constructor(public name: string) {}

  placeOrder(restaurant: Restaurant, items: FoodItem[]) {
    const order = new Order(restaurant, new BasicPricingStrategy());
    items.forEach((item) => order.addItem(item));
    order.showOrderSummary();
  }
}

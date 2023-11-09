import { Restaurant } from "./Restaurant";
import { BasicPricingStrategy, Order } from "./Order";
import { FoodItem } from "./FoodItem";

export class User {
  private email: string;
  private isPremium: boolean;

  constructor(public name: string, email: string, isPremium: boolean = false) {
    this.email = email;
    this.isPremium = isPremium;
  }

  placeOrder(restaurant: Restaurant, items: FoodItem[]) {
    const order = new Order(restaurant, new BasicPricingStrategy());
    items.forEach((item) => order.addItem(item));
    order.showOrderSummary();
  }

  getEmail() {
    return this.email;
  }

  isPremiumUser() {
    return this.isPremium;
  }

  accessPremiumFeature() {
    if (this.isPremium) {
      console.log(`${this.name} имеет доступ к премиум-функции.`);
    } else {
      console.log(`${this.name} не является премиум-пользователем и не имеет доступа к премиум-функции.`);
    }
  }
}

export class UserFactory {
  static createUser(name: string, email: string, isPremium: boolean = false): User {
    return new User(name, email, isPremium);
  }
}

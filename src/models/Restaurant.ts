import { FoodItem } from "./FoodItem";

export class Restaurant {
  private static instance: Restaurant | null = null;

  private constructor(private name: string) {}

  static createInstance(name: string) {
    if (!Restaurant.instance) {
      Restaurant.instance = new Restaurant(name);
    }
    return Restaurant.instance;
  }

  getMenu() {
    return [
      new FoodItem("Burger", 5),
      new FoodItem("Pizza", 8),
      new FoodItem("Salad", 3),
    ];
  }
}

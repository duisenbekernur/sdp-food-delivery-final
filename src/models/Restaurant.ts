import { BasicFoodItem } from "./FoodItem";

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
      new BasicFoodItem("Burger", 1000),
      new BasicFoodItem("Pizza", 2000),
      new BasicFoodItem("Salad", 1500),
    ];
  }
}

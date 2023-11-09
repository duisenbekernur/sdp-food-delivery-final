import { FoodItem } from "./FoodItem";
import { Restaurant } from "./Restaurant";

export interface PricingStrategy {
  calculateTotal(items: FoodItem[]): number;
}

export class BasicPricingStrategy implements PricingStrategy {
  calculateTotal(items: FoodItem[]): number {
    return items.reduce((total, item) => total + item.price, 0);
  }
}

export class DiscountPricingStrategy implements PricingStrategy {
  calculateTotal(items: FoodItem[]): number {
    const total = items.reduce((total, item) => total + item.price, 0);
    return total * 0.9; // 10% discount
  }
}

export class Order {
  private items: FoodItem[] = [];

  constructor(
    private restaurant: Restaurant,
    private strategy: PricingStrategy,
  ) {}

  addItem(item: FoodItem) {
    this.items.push(item);
  }

  calculateTotal() {
    return this.strategy.calculateTotal(this.items);
  }

  showOrderSummary() {
    console.log("Order Summary:");
    console.log(`Restaurant: Alatau`);
    console.log("Items:");
    this.items.forEach((item) => {
      console.log(`${item.name} - $${item.price}`);
    });
    console.log(`Total: $${this.calculateTotal()}`);
  }
}

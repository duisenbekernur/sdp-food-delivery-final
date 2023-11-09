import { FoodItem } from "./FoodItem";
import { Restaurant } from "./Restaurant";
import { BasicPricingStrategy, PricingStrategy } from "./Order";

export interface OrderObserver {
  update(order: Order): void;
}

export class Order {
  private items: FoodItem[] = [];
  private observers: OrderObserver[] = [];

  constructor(
    private restaurant: Restaurant,
    private strategy: PricingStrategy,
  ) {}

  addObserver(observer: OrderObserver) {
    this.observers.push(observer);
  }

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
    this.notifyObservers();
  }

  private notifyObservers() {
    this.observers.forEach((observer) => observer.update(this));
  }
}

import { FoodComponent } from "./FoodItem";

export interface PricingStrategy {
  calculateTotal(items: FoodComponent[]): number;
}
export interface OrderObserver {
  update(order: Order): void;
}

export class BasicPricingStrategy implements PricingStrategy {
  calculateTotal(items: FoodComponent[]): number {
    return items.reduce((total, item) => total + item.price, 0);
  }
}

export class DiscountPricingStrategy implements PricingStrategy {
  calculateTotal(items: FoodComponent[]): number {
    const total = items.reduce((total, item) => total + item.price, 0);
    return total * 0.9; // 10% discount
  }
}

export class Order {
  private strategy: PricingStrategy | null = null;
  private items: FoodComponent[] = [];
  private observers: OrderObserver[] = [];
  private delivered: boolean = false; // Флаг, отражающий доставку заказа

  constructor(private orderItems: FoodComponent[]) {
    this.items = orderItems;
  }

  setStrategy(strategy: PricingStrategy) {
    this.strategy = strategy;
  }

  addObserver(observer: OrderObserver) {
    this.observers.push(observer);
  }

  addItem(item: FoodComponent) {
    this.items.push(item);
  }

  calculateTotal() {
    return this.strategy?.calculateTotal(this.items || []) || 0;
  }

  showOrderSummary() {
    console.log("Items:");
    this.items.forEach((item) => {
      console.log(`${item.name} - $${item.price}`);
    });
    console.log(`Total: $${this.calculateTotal()}`);
  }

  // Метод, который вызывается при прибытии вашего заказа
  // в назначенное место (в данном случае, пока просто фиктивный пример)
  orderDelivered() {
      this.delivered = true;
      this.notifyObservers(); // Уведомление наблюдателей о доставке
  }

  // Метод, позволяющий уведомить всех наблюдателей о доставке заказа

  notifyObservers() {
    if (this.delivered) {
      this.observers.forEach((observer) => {
        observer.update(this);
      });
    }
  }
}

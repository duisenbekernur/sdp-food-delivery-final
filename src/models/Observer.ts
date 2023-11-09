import { FoodItem } from "./FoodItem";
import { Restaurant } from "./Restaurant";
import { BasicPricingStrategy, PricingStrategy } from "./Order";

export interface OrderObserver {
  update(order: Order): void;
}

export class Order {
  private items: FoodItem[] = [];
  private observers: OrderObserver[] = [];
  private delivered: boolean = false; // Флаг, отражающий доставку заказа

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

  

  // Метод, который вызывается при прибытии вашего заказа
  // в назначенное место (в данном случае, пока просто фиктивный пример)
  orderDelivered() {
    console.log("Ваш заказ прибыл в назначенное место!");
    setTimeout(() => {
      this.delivered = true;
      this.notifyObservers(); // Уведомление наблюдателей о доставке
    }, 5000); // 5000 milliseconds = 5 seconds
  }

  // Метод, позволяющий уведомить всех наблюдателей о доставке заказа

  notifyObservers() {
    if (this.delivered) {
      this.observers.forEach(observer => {
        observer.update(this);
      });
    }
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

export class DeliveryObserver implements OrderObserver {
  update(order: Order): void {
    console.log("Уведомление: Ваш заказ прибыл в назначенное место!");
  }
}

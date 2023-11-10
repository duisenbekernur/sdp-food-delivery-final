import { FoodComponent } from "./FoodItem";

export class CheeseDecorator implements FoodComponent {
  constructor(private foodItem: FoodComponent) {}

  get name(): string {
    return `${this.foodItem.name} with Cheese`;
  }

  get price(): number {
    return this.foodItem.price + 200;
  }
}

export class TomatoDecorator implements FoodComponent {
  constructor(private foodItem: FoodComponent) {}

  get name(): string {
    return `${this.foodItem.name} with Tomato`;
  }

  get price(): number {
    return this.foodItem.price + 200;
  }
}

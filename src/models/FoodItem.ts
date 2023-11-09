export class FoodItem {
  constructor(
    public name: string,
    public price: number,
  ) {}

  decorate(item: FoodItem, toppings: string[]) {
    const decoratedItem = new FoodItem(
      `${item.name} with ${toppings.join(", ")}`,
      item.price + toppings.length * 2,
    );
    return decoratedItem;
  }
}

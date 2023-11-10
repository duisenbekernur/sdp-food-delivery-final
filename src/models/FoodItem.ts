export interface FoodComponent {
  name: string;
  price: number;
}

export class BasicFoodItem implements FoodComponent {
  constructor(
    public name: string,
    public price: number,
  ) {}
}

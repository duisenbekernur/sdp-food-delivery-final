import { Order, OrderObserver } from "./Order";

export class User implements OrderObserver {
  private email: string;
  private isPremium: boolean;

  constructor(
    public name: string,
    email: string,
    isPremium: boolean = false,
  ) {
    this.email = email;
    this.isPremium = isPremium;
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
      console.log(
        `${this.name} не является премиум-пользователем и не имеет доступа к премиум-функции.`,
      );
    }
  }

  update(): void {
    console.log("\nУведомление: Ваш заказ прибыл в назначенное место!");
  }
}

export class UserFactory {
  constructor() {}

  public createUser(
    name: string,
    email: string,
    isPremium: boolean = false,
  ): User {
    return new User(name, email, isPremium);
  }
}

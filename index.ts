import * as readline from "readline";

import { Restaurant } from "./src/models/Restaurant";
import { BasicFoodItem, FoodComponent } from "./src/models/FoodItem";
import { User, UserFactory } from "./src/models/User";
import { CheeseDecorator, TomatoDecorator } from "./src/models/Toppings";
import {
  BasicPricingStrategy,
  DiscountPricingStrategy,
  Order,
} from "./src/models/Order";
import {
  PaymentAdapter,
  PaymentSystem,
  PaypalPayment,
  StripePayment,
} from "./src/models/ExternalPaymentGateway";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "\nWelcome to the Online Food Delivery System of the restaurant 'Alatau'!",
);

const restaurant = Restaurant.createInstance("Restaurant Alatau");
const userFactory = new UserFactory();

const user = userFactory.createUser("Yernur", "yernur@gmail.com", true);

const menu = restaurant.getMenu();
let orderFoodIds = [];

console.log("\nRestaurant's Menu:");
menu.forEach((item, id) => {
  console.log(`${id + 1}. ${item.name} - ${item.price}₸`);
});
console.log(
  "\nAlso, you can choose additional toppings for each food. Our toppings:",
);
console.log("1. Cheese - 200₸\n2. Tomato - 200₸\n");

async function processUserInput(userInput: string) {
  let orderItems: FoodComponent[] = [];

  orderFoodIds = userInput.match(/\d+/g)?.map(Number) || [];

  let orderFoodsTitle = "";

  orderFoodIds.forEach((id, index) => {
    orderFoodsTitle +=
      menu[id - 1].name + (index === orderFoodIds.length - 1 ? "." : ", ");
  });
  console.log(`You chose: ${orderFoodsTitle}.`);

  for (let i = 0; i < orderFoodIds.length; i++) {
    const m = menu[orderFoodIds[i] - 1];

    const input = await askQuestion(
      "=== " +
        m.name +
        ": You can add some toppings. Write id's of toppings or write 0 to skip: ",
    );

    const toppingIds = input.match(/\d+/g)?.map(Number) || [];

    let item: FoodComponent = new BasicFoodItem(m.name, m.price);

    if (+toppingIds[0] === 0) {
      orderItems.push(item);
      continue;
    }

    toppingIds.forEach((toppingId) => {
      if (toppingId === 1) {
        item = new CheeseDecorator(item);
      } else if (toppingId === 2) {
        item = new TomatoDecorator(item);
      }
    });

    orderItems.push(item);
  }

  const order = new Order(orderItems);
  order.addObserver(user);
  order.setStrategy(new BasicPricingStrategy());
  order.showOrderSummary();

  const promocode = await askQuestion(
    "\nWrite promocode if you have,  or 0 to skip: ",
  );

  if (promocode === "accepted") {
    order.setStrategy(new DiscountPricingStrategy());
    console.log(
      "You are used a promocode for discount 10%! Total price now is " +
        order.calculateTotal(),
    );
  }

  const paymentType = await askQuestion(
    "\nHow you will pay? We provide this types of payment: \n1. Stripe\n2. Paypal\n\n Write the id of the payment type: ",
  );

  let payment: PaymentSystem | null = null;
  if (+paymentType === 1) {
    payment = new PaymentAdapter(new StripePayment());
  } else if (+paymentType === 2) {
    payment = new PaymentAdapter(new PaypalPayment());
  }

  payment?.processPayment(order.calculateTotal());

  setTimeout(() => {
    order.orderDelivered();
  }, 5000);
}

rl.question(
  "Please, choose foods from the menu (write id's with commas):",
  processUserInput,
);

rl.on("close", () => {
  console.log("\n\nThank you for using the Online Food Delivery System!");
  process.exit(0);
});

function askQuestion(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

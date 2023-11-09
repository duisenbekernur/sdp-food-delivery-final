import { Restaurant } from "./src/models/Restaurant";
import { FoodItem } from "./src/models/FoodItem";
import { User } from "./src/models/User";
import { Order } from "./src/models/Observer";

console.log("Welcome to the Online Food Delivery System!");

const restaurant = Restaurant.createInstance("Restaurant A");
const user = new User("Yernur");

const menuA = restaurant.getMenu();

console.log("Restaurant's Menu:");
menuA.forEach((item) => {
  console.log(`${item.name} - $${item.price}`);
});

const orderItems: FoodItem[] = [menuA[0], menuA[2]];

console.log(`User ${user.name} is placing an order:`);
user.placeOrder(restaurant, orderItems);


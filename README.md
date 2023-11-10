# Food delivery service of the restaurant Alatau

The Online Food Delivery System is a TypeScript-based console application that simulates an online food delivery platform. It allows users to browse restaurant menus, place orders, and apply different pricing strategies.

## Project Structure

The project is organized into modules representing key components:

- **models/FoodItem.ts**: Defines the `BasicFoodItem` class for representing food items.
- **models/Toppings.ts**: There is used adapter pattern for creating foods with toppings via classes `CheeseDecorator` and `TomatoDecorator`
- **models/Restaurant.ts**: Implements the `Restaurant` class as a Singleton with menu data. +
- **models/User.ts**: Defines the `User` class that can be created via `UserFactory`.
- **models/Order.ts**: Manages orders, pricing strategies, and demonstrates the Strategy Pattern. +
- **models/ExternalPaymentGateway.ts**: Demonstrates the Adapter Pattern with a simplified external payment interface and implementation.

## Project Setup

```sh
npm install -g  ts-node
```

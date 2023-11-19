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

```sh
ts-node ./index.ts
```

![UML Diagram]([[Диаграмма без названия.drawio.png](https://github.com/duisenbekernur/sdp-food-delivery-final/blob/d8a376899a5241f85c1b61db4dd599384c17c853/%D0%94%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0%20%D0%B1%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.drawio.png)https://github.com/duisenbekernur/sdp-food-delivery-final/blob/d8a376899a5241f85c1b61db4dd599384c17c853/%D0%94%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0%20%D0%B1%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.drawio.png](https://github.com/duisenbekernur/sdp-food-delivery-final/blob/main/%D0%94%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0%20%D0%B1%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.drawio.png?raw=true)https://github.com/duisenbekernur/sdp-food-delivery-final/blob/main/%D0%94%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0%20%D0%B1%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.drawio.png?raw=true)

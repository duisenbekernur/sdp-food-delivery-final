# Food delivery

The Online Food Delivery System is a TypeScript-based console application that simulates an online food delivery platform. It allows users to browse restaurant menus, place orders, and apply different pricing strategies.

## Project Structure

The project is organized into modules representing key components:

- **models/FoodItem.ts**: Defines the `FoodItem` class for representing food items.
- **models/Restaurant.ts**: Implements the `Restaurant` class as a Singleton with menu data.
- **models/User.ts**: Defines the `User` class for placing orders and demonstrating the Factory Pattern.
- **models/Order.ts**: Manages orders, pricing strategies, and demonstrates the Strategy Pattern.
- **models/ExternalPaymentGateway.ts**: Demonstrates the Adapter Pattern with a simplified external payment gateway interface and implementation.

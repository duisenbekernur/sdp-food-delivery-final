// Интерфейс платежной системы
interface PaymentSystem {
    processPayment(amount: number): void;
}

// Реализация платежной системы Stripe
class StripePayment implements PaymentSystem {
    processPayment(amount: number) {
        console.log(`Проведение платежа через Stripe на сумму ${amount}...`);

        console.log(`Платеж на сумму ${amount} обработан успешно через Stripe`);
    }
}

// Логика обработки платежа через PayPal
class PaypalPayment implements PaymentSystem {
    processPayment(amount: number) {
        console.log(`Проведение платежа через PayPal на сумму ${amount}...`);

        console.log(`Платеж на сумму ${amount} обработан успешно через PayPal`);
    }
}


// Адаптер для платежей
class PaymentAdapter implements PaymentSystem {
    private paymentSystem: PaymentSystem;

    constructor(paymentSystem: PaymentSystem) {
        this.paymentSystem = paymentSystem;
    }

    processPayment(amount: number) {
        console.log(`Начало обработки платежа: сумма ${amount}`);
        
        // Здесь происходит преобразование вызова интерфейса food delivery к специфичному вызову платежной системы
        this.paymentSystem.processPayment(amount);

        console.log(`Платеж на сумму ${amount} обработан успешно`);
    }
}


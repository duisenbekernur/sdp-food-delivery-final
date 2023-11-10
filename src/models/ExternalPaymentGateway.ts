export interface PaymentSystem {
  processPayment(amount: number): void;
}

export class StripePayment implements PaymentSystem {
  processPayment(amount: number) {
    console.log(`Проведение платежа через Stripe на сумму ${amount}...`);

    console.log(`Платеж на сумму ${amount} обработан успешно через Stripe`);
  }
}

export class PaypalPayment implements PaymentSystem {
  processPayment(amount: number) {
    console.log(`Проведение платежа через PayPal на сумму ${amount}...`);

    console.log(`Платеж на сумму ${amount} обработан успешно через PayPal`);
  }
}

export class PaymentAdapter implements PaymentSystem {
  private paymentSystem: PaymentSystem | null = null;

  constructor(paymentSystem: PaymentSystem) {
    this.paymentSystem = paymentSystem;
  }

  processPayment(amount: number) {
    console.log(`Начало обработки платежа: сумма ${amount}`);

    this.paymentSystem?.processPayment(amount);
  }
}

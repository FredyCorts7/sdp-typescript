import PaymentProcessorsFactory from './payment-processor';
import PaymentProcessor from './payment-processors/payment-processor';
import PaymentTypes from './payment-types';

export default class Order {
  paymentType: PaymentProcessor | undefined;
  commision: number;

  constructor(private type: PaymentTypes, public amount: number) {
    this.commision = 0;
  }

  create(): void {
    this.paymentType = PaymentProcessorsFactory.createPaymentProcessor(
      this.type
    );

    this.commision = this.paymentType.commision * this.amount;
  }
}

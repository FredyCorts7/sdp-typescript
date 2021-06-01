import PaymentProcessor from './payment-processor';

export default class Paypal implements PaymentProcessor {
  get commision(): number {
    return 0.06;
  }
}

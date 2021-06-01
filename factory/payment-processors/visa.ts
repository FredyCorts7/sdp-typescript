import PaymentProcessor from './payment-processor';

export default class Visa implements PaymentProcessor {
  get commision(): number {
    return 0.05;
  }
}

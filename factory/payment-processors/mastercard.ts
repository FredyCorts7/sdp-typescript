import PaymentProcessor from './payment-processor';

export default class MasterCard implements PaymentProcessor {
  get commision(): number {
    return 0.04;
  }
}

import MasterCard from './payment-processors/mastercard';
import PaymentProcessor from './payment-processors/payment-processor';
import Paypal from './payment-processors/paypal';
import Visa from './payment-processors/visa';
import PaymentTypes from './payment-types';

export default class PaymentProcessorsFactory {
  public static createPaymentProcessor(type: PaymentTypes): PaymentProcessor {
    if (type === PaymentTypes.MasterCard) return new MasterCard();

    if (type === PaymentTypes.Visa) return new Visa();

    if (type === PaymentTypes.Paypal) return new Paypal();

    throw new Error('invalid payment processor');
  }
}

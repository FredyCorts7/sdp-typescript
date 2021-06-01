import Order from './order';
import MasterCard from './payment-processors/mastercard';
import Paypal from './payment-processors/paypal';
import Visa from './payment-processors/visa';
import PaymentTypes from './payment-types';

describe('order - create method', () => {
  test('should be mastercard payment processor', () => {
    const amount = 20000;
    const commision = 0.04;
    const order = new Order(PaymentTypes.MasterCard, amount);

    order.create();

    expect(order.amount).toBe(amount);
    expect(order.commision).toBe(amount * commision);
    expect(order.paymentType).toBeInstanceOf(MasterCard);
  });

  test('should be visa payment processor', () => {
    const amount = 50000;
    const commision = 0.05;
    const order = new Order(PaymentTypes.Visa, amount);

    order.create();

    expect(order.amount).toBe(amount);
    expect(order.commision).toBe(amount * commision);
    expect(order.paymentType).toBeInstanceOf(Visa);
  });

  test('should be paypal payment processor', () => {
    const amount = 100000;
    const commision = 0.06;
    const order = new Order(PaymentTypes.Paypal, amount);

    order.create();

    expect(order.amount).toBe(amount);
    expect(order.commision).toBe(amount * commision);
    expect(order.paymentType).toBeInstanceOf(Paypal);
  });
});

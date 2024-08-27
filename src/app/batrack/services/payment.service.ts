import { Injectable } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }
  stripePromise = loadStripe('your-publishable-key'); // Replace with your Stripe public key

  async createPaymentMethod(cardElement: any, billingDetails: any) {
    const stripe = await this.stripePromise;
    if (!stripe) {
      throw new Error('Stripe has not been initialized');
    }

    return stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: billingDetails,
    });

  }

  async confirmCardPayment(clientSecret: string, paymentMethodId: string) {
    const stripe = await this.stripePromise;
    if (!stripe) {
      throw new Error('Stripe has not been initialized');
    }

    return stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethodId,
    });
  }
}

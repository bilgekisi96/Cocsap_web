import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styles: [
  ]
})
export class PaymentComponent {
  @ViewChild('cardElement') cardElement!: ElementRef;
  card: any;

  constructor(private stripeService: PaymentService) {}

  ngAfterViewInit() {
    this.setupCardElement();
  }

  setupCardElement() {
    this.stripeService.stripePromise.then((stripe:any) => {
      if (stripe) {
        const elements = stripe.elements();
        this.card = elements.create('card');
        this.card.mount(this.cardElement.nativeElement);
      }
    });
  }

  async handlePayment() {
    const billingDetails = { name: 'Customer Name', email: 'customer@example.com' }; // Replace with actual billing details

    try {
      const paymentMethodResult = await this.stripeService.createPaymentMethod(this.card, billingDetails);

      if (paymentMethodResult.error) {
        console.error('Payment method creation failed:', paymentMethodResult.error);
      } else {
        console.log('Payment method created:', paymentMethodResult.paymentMethod);

        // Here you should send the paymentMethodResult.paymentMethod.id to your backend to create a PaymentIntent
        // For demo purposes, assume you get a clientSecret from the backend
        const clientSecret = 'your-client-secret'; // Replace with actual client secret from your backend

        const confirmationResult = await this.stripeService.confirmCardPayment(clientSecret, paymentMethodResult.paymentMethod.id);

        if (confirmationResult.error) {
          console.error('Payment confirmation failed:', confirmationResult.error);
        } else {
          console.log('Payment succeeded:', confirmationResult.paymentIntent);
        }
      }
    } catch (error) {
      console.error('Payment failed:', error);
    }
  }

}

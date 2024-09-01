import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styles: [
  ]
})
export class PaymentComponent {
  @ViewChild('cardElement') cardElement!: ElementRef;
  card: any;

  constructor() {}

  ngAfterViewInit() {
    this.setupCardElement();
  }

  setupCardElement() {}


}

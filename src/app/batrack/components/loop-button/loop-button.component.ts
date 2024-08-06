import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-loop-button',
  templateUrl: './loop-button.component.html',
  styles: [],
  animations: [
    trigger('bounce', [
      state('up', style({ transform: 'translateY(-10px)' })),
      state('down', style({ transform: 'translateY(10px)' })),
      transition('up <=> down', [
        animate('1s ease-in-out', keyframes([
          style({ transform: 'translateY(-1rem)', offset: 0 }),
          style({ transform: 'translateY(1rem)', offset: 0.5 })
        ]))
      ])
    ])
  ]
})
export class LoopButtonComponent {
  animationState: string = 'up';
  items: number[] = Array.from({ length: 100 }, (_, i) => i + 1);

  constructor() {
    this.loopAnimation();
  }

  scrollDown() {
    const scrollAmount = 1200; // Adjust the value as needed to scroll down by a certain amount
    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth'
    });
  }

  loopAnimation() {
    setInterval(() => {
      this.animationState = this.animationState === 'up' ? 'down' : 'up';
    }, 1000);
  }
}


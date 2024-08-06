import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-moving-button',
  templateUrl: './moving-button.component.html',
  styles: [
  ],
  animations: [
    trigger('moveButton', [
      state('start', style({ transform: 'translate(0, 0)' })),
      state('end', style({ transform: 'translate(100px, 100px)' })),
      transition('start => end', [
        animate('0.5s ease-in', keyframes([
          style({ transform: 'translate(0, 0)', offset: 0 }),
          style({ transform: 'translate(50px, 50px)', offset: 0.5 }),
          style({ transform: 'translate(100px, 100px)', offset: 1.0 })
        ]))
      ]),
      transition('end => start', [
        animate('0.5s ease-out', keyframes([
          style({ transform: 'translate(100px, 100px)', offset: 0 }),
          style({ transform: 'translate(50px, 50px)', offset: 0.5 }),
          style({ transform: 'translate(0, 0)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class MovingButtonComponent {
  state: string = 'start';

  animateButton() {
    this.state = this.state === 'start' ? 'end' : 'start';
  }
}

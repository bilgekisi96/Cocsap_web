import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-pagelem',
  templateUrl: './pagelem.component.html',
  styles: [
  ]
})
export class PagelemComponent {
  constructor(private router: Router) {
  }
  logfunc(){
    this.router.navigate(['/login'])
    }
}

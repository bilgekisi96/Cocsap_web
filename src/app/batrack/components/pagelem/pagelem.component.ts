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
  onButtonClickinsta(){
    window.open('https://www.instagram.com/softwaresolitions', '_blank');
  }
  onButtonClickwhatsapp(){
    window.open('https://chat.whatsapp.com/LQ37MAS0Uto93S75XjPjXe', '_blank');

  }
  onButtonClicktwetter(){

  }
  onButtonClickfacebook(){

  }




}

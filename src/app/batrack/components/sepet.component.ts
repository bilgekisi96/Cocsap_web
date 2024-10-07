import { Component,EventEmitter,Output } from '@angular/core';

interface Product {
  name: string;
  price: number;
  quantity: number;
  image: string;  // Ürün resim yolu
}

@Component({
  selector: 'app-sepet',
  templateUrl: './sepet.component.html',
  styles: [
  ]
})
export class SepetComponent {


  Oncartsidenav(data:Product){


    }

}

import { Component,EventEmitter,Output,OnInit } from '@angular/core';

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
export class SepetComponent implements OnInit{

  constructor() {}

  ngOnInit(){}

  name: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
  image: string | undefined;  // Ürün resim yolu

  cartout(data:Product){
      this.name = data.name
      this.price = data.price
      this.quantity = data.quantity
      this.image = data.image
    }

}

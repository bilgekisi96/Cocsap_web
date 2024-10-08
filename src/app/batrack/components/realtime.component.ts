import {Component, OnInit,EventEmitter,Output} from '@angular/core';
import axios from "axios";


interface Product {
  name: string;
  price: number;
  quantity: number;
  image: string;  // Ürün resim yolu
}

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styles: [
  ]
})

export class RealtimeComponent implements OnInit {

  cart: Product[] = [];

  constructor(){}

  ngOnInit() {}

  @Output() cartout: EventEmitter<any> = new EventEmitter();

  products: Product[] = [
    { name: 'Ürün 1', price: 50, quantity: 1, image: 'assets/folder1/@cocsapientis.jpg' },
    { name: 'Ürün 2', price: 30, quantity: 1, image: 'assets/folder1/@cocsapientis.png' },
    { name: 'Ürün 3', price: 20, quantity: 1, image: 'assets/folder1/@cocsapientis1.png' },
    { name: 'Ürün 4', price: 50, quantity: 1, image: 'assets/folder1/@cocsapientis1.png' },
    { name: 'Ürün 5', price: 70, quantity: 1, image: 'assets/folder1/@cocsapientis1.png' },
    { name: 'Ürün 6', price: 60, quantity: 1, image: 'assets/folder1/@cocsapientis.png' },
    { name: 'Ürün 7', price: 20, quantity: 1, image: 'assets/folder1/@cocsapientis1.png' },
    { name: 'Ürün 8', price: 60, quantity: 1, image: 'assets/folder1/@cocsapientis.png' },
  ];


  // Sepete ürün ekle
  addToCart(product: Product, selectedQuantity: number) {

    this.cartout.emit(this.cart)
    const existingProduct = this.cart.find(p => p.name === product.name);

    if (existingProduct) {
      existingProduct.quantity += selectedQuantity;
    } else {
      this.cart.push({ ...product, quantity: selectedQuantity });
    }
  }


}

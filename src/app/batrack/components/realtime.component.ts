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
    const existingProduct = this.cart.find(p => p.name === product.name);

    if (existingProduct) {
      existingProduct.quantity += selectedQuantity;
    } else {
      this.cart.push({ ...product, quantity: selectedQuantity });
    }
  }

  // Sepetten ürün çıkar
  removeFromCart(product: Product) {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  // Toplam fiyatı hesapla
  getTotalPrice(): number {
    return this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  // Sepetteki toplam ürün adedini hesapla
  getTotalItems(): number {
    return this.cart.reduce((total, product) => total + product.quantity, 0);
  }

  // Sepetteki ürün miktarını güncelle
  updateQuantity(product: Product, quantity: number) {
    this.cartout.emit(this.cart)
    if (quantity <= 0) {
      this.removeFromCart(product); // Ürün miktarı 0 veya daha az ise sepetten çıkar.
    } else {
      product.quantity = quantity;
    }
  }


}

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

  name: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
  image: string | undefined;  // Ürün resim yolu

  cart: Product[] = []

  constructor() {}

  ngOnInit(){}

  cartout(data:Product){
      this.name = data.name
      this.price = data.price
      this.quantity = data.quantity
      this.image = data.image
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

    if (quantity <= 0) {
      this.removeFromCart(product); // Ürün miktarı 0 veya daha az ise sepetten çıkar.
    } else {
      product.quantity = quantity;
    }
  }

}

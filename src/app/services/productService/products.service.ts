import { Injectable } from '@angular/core';
import { IProducts } from '../../interfaces/productinterface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: IProducts[] = [
    {
      id: 1,
      uId: 1,
      title: "Raw Black T-Shirt Lineup",
      stock: true,
      price: 75.00,
      SKU: Math.round(Math.random() * (99999999 - 10000000) + 10000000),
      quantity: 1,
      detail: "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.",
      img: "./Products/cover-1.png",
      categories: ["T-shirt", "Trend"],
      review: {
        username: "Misho",
        date: "1 week ago",
        comment: "Yvelaze magari kontenti"
      }
    },
    {
      id: 2,
      uId: 1,
      title: "Raw Black T-Shirt Lineup12",
      stock: false,
      price: 80.00,
      SKU: Math.round(Math.random() * (99999999 - 10000000) + 10000000),
      quantity: 1,
      detail: "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.",
      img: "./Products/cover-2.png",
      categories: ["T-shirt"],
      review: {
        username: "Misho",
        date: "1 week ago",
        comment: "Yvelaze magari kontenti"
      }
    }
  ]
  constructor() { }

  getProducts(){
    return this.products;
  }

  getProductByUID(userId: number){
    return this.products.filter(user => user.uId === userId);
  }
}

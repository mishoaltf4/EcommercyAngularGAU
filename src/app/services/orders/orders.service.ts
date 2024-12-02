import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders = [
    {
      id: 1,
      uId: 1,
      title: "Raw Black T-Shirt Lineup",
      price: 75.00,
      quantity: 1,
      img: "./Products/cover-1.png",
      categories: ["T-shirt", "Trend"],
      status: "Completed"
    },
    {
      id: 2,
      uId: 1,
      title: "Raw Black T-Shirt Lineup",
      price: 75.00,
      quantity: 1,
      img: "./Products/cover-1.png",
      categories: ["T-shirt", "Trend"],
      status: "Completed"
    },
    {
      id: 3,
      uId: 1,
      title: "Raw Black T-Shirt Lineup",
      price: 75.00,
      quantity: 1,
      img: "./Products/cover-1.png",
      categories: ["T-shirt", "Trend"],
      status: "Completed"
    },
    {
      id: 4,
      uId: 1,
      title: "Raw Black T-Shirt Lineup",
      price: 75.00,
      quantity: 1,
      img: "./Products/cover-1.png",
      categories: ["T-shirt", "Trend"],
      status: "Completed"
    },
    {
      id: 5,
      uId: 1,
      title: "Raw Black T-Shirt Lineup",
      price: 75.00,
      quantity: 1,
      img: "./Products/cover-1.png",
      categories: ["T-shirt", "Trend"],
      status: "Completed"
    },
  ]
  constructor() { }

  getLengthOfOrders(): number{
    return this.orders.length
  }
}

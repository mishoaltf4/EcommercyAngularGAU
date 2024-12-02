import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customers = [
    {
      id: 1,
      name: "Esther Howard",
      email: "esther.howard@gmail.com",
      address: "8642 Yule Street, Arvada CO 80007",
    },
    {
      id: 2,
      name: "Esther Howard",
      email: "esther.howard@gmail.com",
      address: "8642 Yule Street, Arvada CO 80007",
    },
    {
      id: 3,
      name: "Esther Howard",
      email: "esther.howard@gmail.com",
      address: "8642 Yule Street, Arvada CO 80007",
    },
    {
      id: 4,
      name: "Esther Howard",
      email: "esther.howard@gmail.com",
      address: "8642 Yule Street, Arvada CO 80007",
    },
    {
      id: 5,
      name: "Esther Howard",
      email: "esther.howard@gmail.com",
      address: "8642 Yule Street, Arvada CO 80007",
    },
  ]
  constructor() { }


  getLengthOfCustomers(): number{
    return this.customers.length;
  }
}

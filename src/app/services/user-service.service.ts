import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  admin: IUser[] = [
    {
      id: 1,
      email: 'mikheil.jioevi@gau.edu.ge',
      password: 'password123',
    },{
      id: 2,
      email: 'nikoloz.chargeishvili@gau.edu.ge',
      password: 'password123',
    }
  ]

  constructor() { }

  getUserByEmail(email: string){
    return this.admin.find(user => user.email === email);
  }
}

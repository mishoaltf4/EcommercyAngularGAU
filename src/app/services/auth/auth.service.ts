import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceService} from '../userService/user-service.service';
import {IUser} from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private userService: UserServiceService) {
  }

  userSignIn(email: string, password: string) {
    const user: IUser | undefined = this.userService.getUserByEmail(email);
    if(user){
      if(user.password === password){
        alert("Congratulations!");
        this.userService.getUserById(user.id)
        user.active = true;
        this.router.navigate(['/']);
      }
    }else{
      alert(`Invalid email or password`);
    }
  }

  adminSignIn(email: string, password: string) {
    const user: IUser | undefined = this.userService.getUserByEmail(email);
    if(user) {
      if (user?.status === "admin") {
        if (user && user.password === password) {
          alert("U loggined in!");
          user.active = true;
          this.router.navigate(['/admin/dashboard']);
          this.userService.getUserById(user.id);
        } else {
          console.error("Invalid email or password!");
        }
      } else {
        alert("User status is not admin!");
      }
    }else{
      alert("Invalid email or password!");
    }
  }
}
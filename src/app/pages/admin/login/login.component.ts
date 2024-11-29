import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServiceService } from '../../../services/user-service.service';
import { IUser } from '../../../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  adminLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });


  constructor(private userService: UserServiceService, private router: Router){
  }

  onSubmit(){
    if(this.adminLogin.valid){
      const email = this.adminLogin.get('email')?.value;
      const password = this.adminLogin.get('password')?.value;

      if(email){
        const user = this.userService.getUserByEmail(email);

        if(user && user.password === password){
          alert("U loggined in!");
          this.router.navigate(['/admin/dashboard']);
          
        }else{
          console.error("Invalid email or password!");
        }
      }else{
        console.log('email is required');
      }
    }else{
      console.error('Form is invalid');
    }
  }
}

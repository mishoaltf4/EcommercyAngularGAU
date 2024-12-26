import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
<<<<<<< HEAD
import { SignupService } from '../../../../services/signup/signup.service';
=======
import {AuthService} from '../../../../services/auth/auth.service';
>>>>>>> 4d34ff0d28181a105cd11f76008feb7dacbe8e00


@Component({
  selector: 'app-login',
  templateUrl: './userlogin.component.html',
  imports:[ReactiveFormsModule,CommonModule,FormsModule,HeaderComponent,FooterComponent],
  styleUrls: ['./userlogin.component.css']
})
export class userLoginComponent {
  loginForm: FormGroup;

<<<<<<< HEAD
  constructor(private fb: FormBuilder , private userServ:SignupService ,private route:Router) {
=======
  constructor(private fb: FormBuilder, private route:Router, private auth: AuthService) {
>>>>>>> 4d34ff0d28181a105cd11f76008feb7dacbe8e00
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const email: string = this.loginForm.get('email')!.value as string;
      const password: string = this.loginForm.get('password')!.value as string;

      this.auth.userSignIn(email, password);
    }
  }

}


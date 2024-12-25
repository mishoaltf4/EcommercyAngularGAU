import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SignupService } from '../../../../services/signup/signup.service';


@Component({
  selector: 'app-login',
  templateUrl: './userlogin.component.html',
  imports:[ReactiveFormsModule,CommonModule,FormsModule,HeaderComponent,FooterComponent],
  styleUrls: ['./userlogin.component.css']
})
export class userLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder , private userServ:SignupService ,private route:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(6)]] 
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login Data', this.loginForm.value);
      const user = this.userServ.getUserByEmail(this.loginForm.get('email')?.value);
      if (user) {
        if (user.password == this.loginForm.get('password')?.value) {
               this.route.navigate(['/user/home']);
        }
      }
    } else {
      console.log('Form is invalid');
    }
  }

}


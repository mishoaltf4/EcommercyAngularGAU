import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  url = ""
  words = [''];
  constructor(private router: Router){
    this.url = this.router.url
    this.words = this.url.split('/').filter(part => part);
  }
}

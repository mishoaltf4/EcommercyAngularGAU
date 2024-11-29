import { Component } from '@angular/core';
import { LeftBarComponent } from "../left-bar/left-bar.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-dashboard',
  imports: [LeftBarComponent, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

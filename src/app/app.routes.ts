import { Routes } from '@angular/router';
import path from 'node:path';
import { LoginComponent } from './pages/admin/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

export const routes: Routes = [
    {path: 'admin/login', component: LoginComponent},
    {path: 'admin/dashboard', component: DashboardComponent},
];

import { Routes } from '@angular/router';
import path from 'node:path';
import { LoginComponent } from './pages/admin/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { OrdersComponent } from './pages/admin/orders/orders.component';
import { CustomersComponent } from './pages/admin/customers/customers.component';
import { ReviewsComponent } from './pages/admin/reviews/reviews.component';
import { SettingsComponent } from './pages/admin/settings/settings.component';
import { AuthGuard } from './admin-guard.guard';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { HomeComponent } from './pages/user/components/home/home.component';

// canActivate: [AuthGuard]
// canActivate: [AuthGuard]
// canActivate: [AuthGuard]
// canActivate: [AuthGuard]
// canActivate: [AuthGuard]
// canActivate: [AuthGuard]

export const routes: Routes = [
    {path:'', pathMatch:'full' , redirectTo:'user/home'},
    {path:'user/home',component:HomeComponent},
    {path: 'admin/login', component: LoginComponent},
    {path: 'admin/dashboard', component: DashboardComponent},
    {path: 'admin/products', component: ProductsComponent},
    {path: 'admin/products/add', component: AddProductComponent},
    {path: 'admin/orders', component: OrdersComponent},
    {path: 'admin/customers', component: CustomersComponent},
    {path: 'admin/reviews', component: ReviewsComponent},
    {path: 'admin/settings', component: SettingsComponent},
    {path: "**", component: ErrorComponent},
];

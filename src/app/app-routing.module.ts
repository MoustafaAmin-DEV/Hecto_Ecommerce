import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './views/home/home.module';
import { ShopModule } from './views/shop/shop.module';
import { ShopComponent } from './views/shop/shop.component';
import { BlogModule } from './views/blog/blog.module';
import { BlogComponent } from './views/blog/blog.component';
import { PagesModule } from './views/pages/pages.module';
import { PagesComponent } from './views/pages/pages.component';
import { ProductsModule } from './views/products/products.module';
import { ProductsComponent } from './views/products/products.component';
import { ContactModule } from './views/contact/contact.module';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { RegisterComponent } from './views/authentication/register/register.component';
import { LoginComponent } from './views/authentication/login/login.component';
import { ResetPasswordComponent } from './views/authentication/reset-password/reset-password.component';
import { AuthClassGuard } from './Shared/sevices/auth/auth-class.guard';
import { AboutModule } from './views/about/about.module';
import { AboutComponent } from './views/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    canActivate: [AuthClassGuard],
    loadChildren: () =>
      import('./views/home/home.module').then(() => HomeModule),
    component: HomeComponent,
  },
  {
    path: 'shop',
    canActivate: [AuthClassGuard],
    loadChildren: () =>
      import('./views/shop/shop.module').then(() => ShopModule),
    component: ShopComponent,
  },
  {
    path: 'blog',
    canActivate: [AuthClassGuard],
    loadChildren: () =>
      import('./views/blog/blog.module').then(() => BlogModule),
    component: BlogComponent,
  },
  {
    path: 'pages',
    canActivate: [AuthClassGuard],
    loadChildren: () =>
      import('./views/pages/pages.module').then(() => PagesModule),
    component: PagesComponent,
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./views/about/about.module').then(() => AboutModule),
    component: AboutComponent,
  },
  {
    path: 'products/:id',
    canActivate: [AuthClassGuard],
    loadChildren: () =>
      import('./views/products/products.module').then(() => ProductsModule),
    component: ProductsComponent,
  },
  {
    path: 'contact',
    canActivate: [AuthClassGuard],
    loadChildren: () =>
      import('./views/contact/contact.module').then(() => ContactModule),
    component: ContactComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestLayoutComponent } from './theme/layouts/guest-layout/guest-layout.component';
import { AdminLayout } from './theme/layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then((c) => c.AuthLoginComponent)
      }
    ]
  },
  {
    path: '',
    component: AdminLayout,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

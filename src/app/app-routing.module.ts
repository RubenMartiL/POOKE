import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { environment } from 'src/environments/environment';
import { environment as environmentProd } from 'src/environments/environment.prod';

const routes: Routes = [
  { path: environment.baseUrl+'', component: LoginComponent },
  { path: environment.baseUrl+'register', component: RegisterComponent },
  { path: environment.baseUrl+'game', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

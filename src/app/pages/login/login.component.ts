import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { environment as environmentProd } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  baseUrl = (environment.production) ? environmentProd.baseUrl : environment.baseUrl;
  backendUrl = (environment.production) ? environmentProd.backendUrl : environment.backendUrl;

  nickname: string = '';
  password: string = '';
  error: string = '';
  registered: boolean = false;

  constructor(private router : Router){
    if(sessionStorage.getItem("register")){
      this.registered = true;
    }else{
      this.registered = false;
    }
  }

  doMobileVersion = () => {
    // Verificar si el navegador admite el modo pantalla completa
    if (!document.fullscreenEnabled) {
      return;
    }
  
    // Verificar si ya estamos en pantalla completa
    if (document.fullscreenElement) {
      return;
    }
  
    // Verificar si la función puede ser llamada en este momento
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
    } else {
    }
  };

  login = () => {
    if (/Mobi/.test(navigator.userAgent)) {
      this.doMobileVersion();
    }
  
    const myInit = {
      method: 'POST',
      body: JSON.stringify({nickname: this.nickname, password: this.password}) 
    }
  
    fetch(this.backendUrl+'login.php', myInit)
      .then(response => response.json())
      .then(data => {
        if(data) {
          localStorage.setItem('login', JSON.stringify(data[0]));
          this.router.navigate([this.baseUrl+'/game']);
        } else {
          this.error = 'The nickname or password is not correct.';
        }
      })
  };

  register = () => {
    this.router.navigate([this.baseUrl+'/register']);
  }
}

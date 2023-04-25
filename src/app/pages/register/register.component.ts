import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { environment as environmentProd } from 'src/environments/environment.prod';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  baseUrl = (environment.production) ? environmentProd.baseUrl : environment.baseUrl;
  backendUrl = (environment.production) ? environmentProd.backendUrl : environment.backendUrl;

  user: string = '';
  email: string = '';
  pass: string = '';
  pass2: string = '';
  error: string = '';

  constructor(private router : Router){}

  login = () => {
    this.router.navigate([this.baseUrl]);
  }

  register = () => {
    const myInit = {
      method: 'POST',
      body: JSON.stringify({user: this.user, email: this.email, pass: this.pass, pass2: this.pass2}) 
    }
    fetch(this.backendUrl+'/register.php', myInit)
      .then(response => response.json())
      .then(data => {
        if(data) {
          sessionStorage.setItem("register",'true');
          this.router.navigate([this.baseUrl]);
        }else{
          this.error = 'Incorrect data entered, please check again';
        }
      })
  }
}

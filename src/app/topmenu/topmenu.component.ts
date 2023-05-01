import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { environment as environmentProd } from 'src/environments/environment.prod';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})
export class TopmenuComponent {
  baseUrl = (environment.production) ? environmentProd.baseUrl : environment.baseUrl;

  @Input() activeSection:any = '';
  @Input() userLoged:any;
  openMenu:boolean = false;

  constructor(private router: Router) {}

  logout = () => {
    localStorage.removeItem("login");
    this.router.navigate([this.baseUrl+'']);
  }

  toggleMenu = () => {
    if(this.openMenu) {
      document.getElementById("logoutButton")?.classList.add("closeMenu");
      setTimeout(() => {
        this.openMenu = false;
        document.getElementById("logoutButton")?.classList.remove("closeMenu");
      },500)
    }else{
      this.openMenu = true;
    }
  }
}

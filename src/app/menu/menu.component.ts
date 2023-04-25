import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { environment as environmentProd } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  baseUrl = (environment.production) ? environmentProd.baseUrl : environment.baseUrl;
  
  userLoged: string | null = '';

  activeSection: string = 'home';
  @Input() activeMenuHome:string = '';
  @Output() activeMenu = new EventEmitter();

  constructor(private router: Router) {
    this.userLoged = localStorage.getItem('login');
  }

  logout = () => {
    localStorage.removeItem("login");
    this.router.navigate([this.baseUrl+'']);
  }

  navigation = (seccion: string) => {
    this.activeSection = seccion;
    this.activeMenu.emit(this.activeSection);
  }
}

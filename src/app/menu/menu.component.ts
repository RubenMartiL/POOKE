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

  @Input() userLoged:any;
  @Input() lastSection:any = '';
  @Input() activeMenuHome:string = '';
  @Output() activeMenu = new EventEmitter();

  constructor(private router: Router) {}

  navigation = (seccion: string) => {
    this.activeMenu.emit(seccion);
  }
}

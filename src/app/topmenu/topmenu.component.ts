import { Component, HostListener, Input } from '@angular/core';
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

  @Input() activeSection: any = '';
  @Input() userLoged: any;
  openMenu: boolean = false;
  movil: boolean = false;

  constructor(private router: Router) { }

  async ngOnInit() {
    this.doMobileVersion();
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event: Event) {
    this.doMobileVersion();
  }

  doMobileVersion = () => {
    if (/Mobi/.test(navigator.userAgent)) {
      this.movil = true;
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
    } else {
      this.movil = false;
    }
  }

  logout = () => {
    localStorage.removeItem("login");
    this.router.navigate([this.baseUrl + '']);
  }

  toggleMenu = () => {
    if (this.openMenu) {
      document.getElementById("logoutButton")?.classList.add("closeMenu");
      setTimeout(() => {
        this.openMenu = false;
        document.getElementById("logoutButton")?.classList.remove("closeMenu");
      }, 500)
    } else {
      this.openMenu = true;
    }
  }
}

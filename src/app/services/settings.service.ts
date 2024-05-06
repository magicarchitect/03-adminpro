import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');
  

  constructor() {
    console.log('Settings Service Init');
    const url = localStorage.getItem('theme') || "./assets/css/colors/default-dark.css";
    this.linkTheme?.setAttribute('href',url);
  }

  changeTheme( theme: string){
    //console.log(linkTheme);
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href',url);
    localStorage.setItem('theme', url);
    
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');

    // Limpiamos el check
    links.forEach(elem => {
      elem.classList.remove('working');

      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl == currTheme) {
        elem.classList.add('working');
      }
    });
  }
}

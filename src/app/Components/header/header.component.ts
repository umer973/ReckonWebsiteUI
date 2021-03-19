import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  menus: {};
  subMenus: [];
  constructor() { }

  ngOnInit(): void {
    this.loadMenus();

  }

  loadMenus() {

    var menu = { "Home": "Home", "AboutUs": "AboutUs" }
    this.menus = menu;
  }
  openNav() {

    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav() {

    document.getElementById("mySidenav").style.width = "0";
  }
}

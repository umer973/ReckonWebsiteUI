import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getMenus() {

    const Menus = [
      {
        "MenuID": 1, "MenuName": "About Us", "path": "",
        "Pages": [
          { "path": "page1", "PageName": "Page1" }
        ]
      },
      {
        "MenuID": 2, "MenuName": "Product", "path": "",
        "Pages": [
          { "path": "page2", "PageName": "Page1" }
        ]
      },
      {
        "MenuID": 3, "MenuName": "Customer", "path": "",
        "Pages": [
          { "path": "page3", "PageName": "page3" }
        ]
      },
       {"MenuID": 4, "MenuName": "Alliance", "path": "",},

      {"MenuID": 5, "MenuName": "Partners", "path": "",},

      { "MenuID": 6, "MenuName": "Support", "path": "", },
      { "MenuID": 7, "MenuName": "Contact Us", "path": "", },
       { "MenuID": 8, "MenuName": "Tutorial", "path": "", },
      // { "MenuID": 9, "MenuName": "Testimonials", "path": "", },
    ]

    return Menus;
  }
}

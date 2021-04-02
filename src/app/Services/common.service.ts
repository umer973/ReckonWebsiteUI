import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getMenus() {

    const Menus = [
      {
        "MenuID": 1, "MenuName": "About Us", "path": "about-us",    
      },
      {
        "MenuID": 2, "MenuName": "Product", "path": "",
        "Pages": [
          { "path": "page2", "PageName": "Business Application",
          "Pages": [
              { "path": "page2", "SubPageName": "Reckon-B2C" },
              { "path": "page2", "SubPageName": "Reckon-B2B" },
              { "path": "page2", "SubPageName": "Reckon-Orders" },
              { "path": "page2", "SubPageName": "Reckon-Mreport" }
            ]
          },
          { "path": "page2", "PageName": "Verticals" ,
          "Pages": [
              { "path": "page2", "SubPageName": "Automobiles Parts & Spares" },
              { "path": "page2", "SubPageName": "Bakery & Confectionery" },
              { "path": "page2", "SubPageName": "Books & Stationery" },
              { "path": "page2", "SubPageName": "Ceramics Tiles & Sanitary" },
              { "path": "page2", "SubPageName": "Chemist Shop" },
              { "path": "page2", "SubPageName": "Cosmetics & Personal Care" },
              { "path": "page2", "SubPageName": "Department & Grocery (POS)" },
              { "path": "page2", "SubPageName": "Dry Fruits & Spices" },
              { "path": "page2", "SubPageName": "Eyewear Stores" },
              { "path": "page2", "SubPageName": "Footwear Showroom" },
              { "path": "page2", "SubPageName": "Furniture & Home Decor" },
              { "path": "page2", "SubPageName": "FMCG Distribution" },
              { "path": "page2", "SubPageName": "Garments & Apparel Showroom" }
            ]
          },
          { "path": "page2", "PageName": "ERP Solutions",
          "Pages": [
            { "path": "page2", "SubPageName": "Specialized Supermarket" },
            { "path": "page2", "SubPageName": "Specialized Auto Parts" },
            { "path": "page2", "SubPageName": "Specialized Pharmacy" },
            { "path": "page2", "SubPageName": "Multi Location–Branch Synchronization" },
            { "path": "page2", "SubPageName": "Solution" }
           ]   
          },
          /*{ "path": "page2", "PageName": "Department & Grocery (POS)",
          "Pages": [
            { "path": "page2", "SubPageName": "sub menu" },
            { "path": "page2", "SubPageName": "sub menu" },
            { "path": "page2", "SubPageName": "sub menu" },
            { "path": "page2", "SubPageName": "sub menu" },
            { "path": "page2", "SubPageName": "sub menu" },
            { "path": "page2", "SubPageName": "sub menu" },
            { "path": "page2", "SubPageName": "sub menu" }
           ]
          }*/
        ]
      },
      { "MenuID": 3, "MenuName": "Customer", "path": "", },
      { "MenuID": 4, "MenuName": "Alliance", "path": "", },
      { "MenuID": 5, "MenuName": "Partners", "path": "", },
      { "MenuID": 6, "MenuName": "Support", "path": "", },
      { "MenuID": 7, "MenuName": "Contact Us", "path": "contact-us", },
      { "MenuID": 8, "MenuName": "Tutorial", "path": "", },
      // { "MenuID": 9, "MenuName": "Testimonials", "path": "", },
    ]
    return Menus;
  }
  getClients() {

    const Clients = [
      {
        "ClienID": 1, "ClientName": "De Param Healthcare", "path": "", "ImagePath": "https://dummyimage.com/400x250/000/fff",
      },
      {
        "ClienID": 2, "ClientName": "Kothilal Dental College", "path": "", "ImagePath": "https://dummyimage.com/400x250/000/fff",
      },
      {
        "ClienID": 3, "ClientName": "Surya Hospital", "path": "", "ImagePath": "https://dummyimage.com/400x250/000/fff",
      },
      {
        "ClienID": 4, "ClientName": "Shakun Sales Pvt.Ltd.", "path": "", "ImagePath": "https://dummyimage.com/400x250/000/fff",
      },
      {
        "ClienID": 5, "ClientName": "K.G.M.University", "path": "", "ImagePath": "https://dummyimage.com/400x250/000/fff",
      },
      {
        "ClienID": 6, "ClientName": "LINNET Hospicare Pvt.Ltd", "path": "", "ImagePath": "https://dummyimage.com/400x250/000/fff",
      },
      {
        "ClienID": 7, "ClientName": "Natel Neutratec", "path": "", "ImagePath": "https://dummyimage.com/400x250/000/fff",
      },
      {
        "ClienID": 8, "ClientName": "Nansom Health Care", "path": "", "ImagePath": "https://dummyimage.com/400x250/000/fff",
      },
    ]
    return Clients;
  }
}

import { Component, OnInit } from '@angular/core';
import { getNumberOfCurrencyDigits } from '@angular/common';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {

  clients: any;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {

    this.clients = [] = this.commonService.getClients();
    console.log(this.clients, " -- Load clients--");
  }
  slides = [
    {img: "https://dummyimage.com/400x250/423b42/fff", name:"De Param Healthcare", path: ""},
    {img: "https://dummyimage.com/400x250/2a2b7a/fff", name:"Kothilal Dental College",  path: ""},
    {img: "https://dummyimage.com/400x250/4a2b7a/fff", name:"Surya Hospital",  path: ""},
    {img: "https://dummyimage.com/400x250/7a2b7a/fff", name:"Shakun Sales Pvt.Ltd.",  path: ""},
    {img: "https://dummyimage.com/400x250/9a2b7a/fff", name:"K.G.M.University", path: ""},
    {img: "https://dummyimage.com/400x250/5a2b7a/fff", name:"LINNET Hospicare Pvt.Ltd",  path: ""},
    {img: "https://dummyimage.com/400x250/4a2b7a/fff", name:"Natel Neutratec",  path: ""},
    {img: "https://dummyimage.com/400x250/7a2b7a/fff", name:"Nansom Health Care",  path: ""},
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  
  slickInit(e) {
    console.log('slick initialized');
  }
    
  breakpoint(e) {
    console.log('breakpoint');
  }
    
  afterChange(e) {
    console.log('afterChange');
  }
    
  beforeChange(e) {
    console.log('beforeChange');
  }

}

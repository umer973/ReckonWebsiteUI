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

}

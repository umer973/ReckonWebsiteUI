import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  
})
export class ContactUsComponent implements OnInit , AfterViewInit {

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;
  lat = 34.0698850264673;
  lng = 74.7794666817589;
  
  coordinates = new google.maps.LatLng(this.lat, this.lng);


  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8
   };

   marker = new google.maps.Marker({
    position: this.coordinates,
   // map: this.map,
  });

  constructor() { }

  ngOnInit(): void {
  }


  mapInitializer() {
   this.map = new google.maps.Map(this.gmap.nativeElement, 
      this.mapOptions);
      this.marker.setMap(this.map);
   }


   ngAfterViewInit() {
    this.mapInitializer();
   }

}

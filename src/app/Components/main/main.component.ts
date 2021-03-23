import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'ng-carousel-demo';
  
  slides = [
    {img: "https://dummyimage.com/350x150/423b42/fff"},
    {img: "https://dummyimage.com/350x150/2a2b7a/fff"},
    {img: "https://dummyimage.com/350x150/4a2b7a/fff"}
  ];
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 3};
  
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
 /*$('.trending_slider').slick({
       slidesToShow: 4,
       dots:false,
       centerMode: false,
       infinite: true,
       autoplaySpeed: 1500,
       autoplay: true
       });
      $('.trending_slider_mobile').slick({
       slidesToShow: 2,
       dots:false,
       centerMode: false,
       infinite: true,
       autoplaySpeed: 1500,
       autoplay: true
       });*/
}

import { Component, OnInit } from '@angular/core';
import { Portfolio, LightBoxData } from '../types';
import { Service } from '../services';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {

  constructor(
    private Service: Service,
  ) { }

  portfolio: Portfolio = {};
  slideConfigFull = { slidesToShow: 1, slidesToScroll: 1, dots: true, infinite: true, speed: 500, };
  lb:LightBoxData = { showLB:false, galleryData: [], currentImageIndex: 0, sliderClass: "", portfolioClass: "" };

  ngOnInit(): void {
    this.Service.getPortfolio.subscribe((res: Portfolio) => { this.portfolio = res; });
  }

  //slides = [ {img: "http://placehold.it/350x150/000000"} ];

  fullScreenOff() {
    this.lb = { showLB:false, galleryData: [], currentImageIndex: 0, sliderClass: "", portfolioClass: "" };
  }

  setLightBoxData(data: LightBoxData ){
    this.lb = data;
  }
}

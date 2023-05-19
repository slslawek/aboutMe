import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Portfolio } from '../types';
import { Service } from '../services';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(
    private Service: Service,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  path = '/' + this.activatedRoute.snapshot.url[0].path;
  portfolio: Portfolio = {};
  sliderClass:string[] = [];

  slideConfig = { slidesToShow: 3, slidesToScroll: 1, dots: true, infinite: true, speed: 500,
    responsive: [{ breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }]
    };
  slideConfigFull = { slidesToShow: 1, slidesToScroll: 1, dots: true, infinite: true, speed: 500, };
  activeFull: number|null = null;

  ngOnInit(): void {
    this.Service.getPortfolio.subscribe((res: Portfolio) => { this.portfolio = res });
    setTimeout(() => { this.Service.menuItemHighlight(this.path) });
  }

  /*slides = [ {img: "http://placehold.it/350x150/000000"} ]; */

  fullScreenOn(itemIndex: number, imageIndex: number) {
    console.log("fullScreenOn");
    this.activeFull = itemIndex;
    this.sliderClass[itemIndex] = "fullscreen";
  }

fullScreenOff() {
    console.log("fullScreenOff");
    this.activeFull = null;
    this.sliderClass = [];
  }


  slickInit(e:any) {
    console.log('slick initialized');
  }

  breakpoint(e:any) {
    console.log('breakpoint');
  }

  afterChange(e:any) {
    console.log('afterChange');
  }

  beforeChange(e:any) {
    console.log('beforeChange');
  }

}


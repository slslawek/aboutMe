import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Apps, Web, LightBoxData, Img } from '../../types';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})

export class ElementsComponent implements OnInit {
@Input() apps?: Apps[] = [];
@Input() web?: Web[] = [];
@Input() type?: string = "Apps";
@Output() lightBoxEvent = new EventEmitter<LightBoxData>();

elements: Apps[] | Web[] = [];
galleryData: Img[] = [];
responsive = [{ breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true, dots: true } },
  { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
  { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }];

slideConfig = { slidesToShow: 3, slidesToScroll: 1, dots: false, infinite: true, speed: 500, responsive: this.responsive };

ngOnInit(){
  if(this.apps){
      this.elements = this.apps;
  } else if(this.web){
    this.elements = this.web;
  }
}

fullScreenOn(itemIndex: number, imageIndex: number,type:string) {
  if(this.elements){
    this.galleryData = this.elements[itemIndex].images as Img[];
  }
  const lightBoxData: LightBoxData = { showLB:true, galleryData: this.galleryData, currentImageIndex: imageIndex, sliderClass: "fullscreen", portfolioClass: "hidden" };
  this.lightBoxEvent.emit(lightBoxData);
}

}



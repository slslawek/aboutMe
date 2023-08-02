import { Component, Input } from '@angular/core';
import { animate,  style,  transition, trigger, AnimationEvent } from '@angular/animations';

type Item = { file?: string; }

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
  animations: [
    trigger('animation', [
      transition('void => visible', [ style({transform: 'scale(0.5)'}), animate('150ms', style({transform: 'scale(1)'})) ]),
      transition('visible => void', [ style({transform: 'scale(1)'}), animate('150ms', style({transform: 'scale(0.5)'})) ]),
    ]),
    trigger('animation2', [
      transition(':leave', [ style({opacity: 1}), animate('50ms', style({opacity: 0.8})) ])
    ])
  ]
})

export class LightboxComponent {
  @Input() galleryData: Item[] = [];
  @Input() currentIndex = 0;
  currentLightboxImage: Item = this.galleryData[this.currentIndex];
  showMask = false;
  previewImage = true;
  controls = true;
  totalImageCount = 0;

  onAnimationEnd(event: AnimationEvent) {
    this.onPreviewImage(this.currentIndex);
    if(event.toState === 'void') {
      this.showMask = false;
    }
  }

  next(): void {
    this.currentIndex = this.currentIndex + 1;
    if(this.currentIndex > this.galleryData.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }

  prev(): void {
    this.currentIndex = this.currentIndex - 1;
    if(this.currentIndex < 0) {
      this.currentIndex = this.galleryData.length - 1;
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }

  onClosePreview() {
    this.previewImage = false;
  }

  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.galleryData[index];
  }
}

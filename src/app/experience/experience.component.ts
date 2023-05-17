import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Experience } from '../types';
import { Service } from '../services';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent implements OnInit {

  constructor(
    private Service: Service,
    private activatedRoute: ActivatedRoute,
  ) { }

  public path = '/' + this.activatedRoute.snapshot.url[0].path;
  experience: Experience = {};

  ngOnInit(): void {
    this.Service.getExperience.subscribe((res: Experience) => { this.experience = res });
    setTimeout(() => { this.Service.menuItemHighlight(this.path) });
  }

}

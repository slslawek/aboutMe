import { Component, OnInit } from '@angular/core';
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
  ) { }


  experience: Experience = {};

  ngOnInit(): void {
    this.Service.getExperience.subscribe((res: Experience) => { this.experience = res });
  }

}

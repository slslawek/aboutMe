import { Component, OnInit } from '@angular/core';
import { Skills } from '../types';
import { Service } from '../services';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(
    private Service: Service,
  ) { }

  skills: Skills = {};

  ngOnInit(): void {
    this.Service.getSkills.subscribe((res: Skills) => { this.skills = res });
  }

}


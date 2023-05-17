import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
  ) { }

  public path = '/' + this.activatedRoute.snapshot.url[0].path;
  skills: Skills = {};

  ngOnInit(): void {
    this.Service.getSkills.subscribe((res: Skills) => { this.skills = res });
    setTimeout(() => { this.Service.menuItemHighlight(this.path) });
  }

}


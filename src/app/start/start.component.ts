import { Component, OnInit } from '@angular/core';
import { About } from '../types';
import { Hobby } from '../types';
import { Service } from '../services';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(
	private Service: Service
	) { }

  about: About = {};
  hobby: Hobby = {};

  ngOnInit(): void {
    this.Service.getAbout.subscribe((res: About) => { this.about = res });
    this.Service.getHobby.subscribe((res: Hobby) => { this.hobby = res });
  }
}

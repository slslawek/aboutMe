import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import * as Types from './types';
import { Service } from './services';
import  { Nav } from './nav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'aboutMe';
  checked = true;
  theme = 'darkMode';
  currentLang: string = "pl";
  imgPath: string = "./assets/img/";
  dataUrl: string = './assets/data/data_'+this.currentLang+'.json';
  nav: Types.Menu[] = Nav;
  header: Types.Header = {name:"",address:"",phone:"",email:"",photo:""};
  about: Types.About = {};
  experience: Types.Experience = {};
  skills: Types.Skills = {};
  hobby: Types.Hobby = {};
  portfolio: Types.Portfolio = {};

  constructor(
    private Service: Service,
  ){ }

  ngOnInit(){
    this.Service.getHeader.subscribe((res: Types.Header) => { this.header = res });
    this.getData();
  }

  changeTheme(){
    this.theme = (this.checked)?'darkMode':'lightMode';
  }

  getData(){
    let header: Types.Header;
    let experience: Types.Experience;
    this.Service.getData(this.dataUrl).pipe(
      map( data => {
        header = data.header;
        header.photo = this.imgPath + data.header.photo;
        experience = data.experience;
        if(experience.content){
        experience.content.sort((a,b) => (b.start && a.start)?b.start - a.start:0);
        }
        this.Service.setHeader = header;
        this.Service.setAbout = data.about;
        this.Service.setExperience = experience;
        this.Service.setSkills = data.skills;
        this.Service.setHobby = data.hobby;
        this.Service.setPortfolio = data.portfolio;
      })
    )
    .subscribe(
      {
        next: () => { console.log('Pobieram'); },
        error: (error) => { console.log('Błąd:'); console.log(error); },
        complete: () => { console.log('Pobrano dane'); }
      });
  }

  menuClick(path: string ){
    this.Service.menuItemHighlight(path);
  }

}

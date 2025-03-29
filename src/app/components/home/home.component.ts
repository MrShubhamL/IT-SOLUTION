import { Component, OnInit } from '@angular/core';

import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private readonly service:MainService){}

  company = [
    {
      id:"",
      projectname:"",
      projectsummary:"",
      image:""
    }
  ]

  project = [
    {
      id:"",
      description:"",
      image2:""
    }
  ]

  package = [
    {
      id:"",
      pricename:"",
      rate:"",
      limitedspace:"",
      unlimitedspace:"",
      domainames:"",
      freessl:"",
      dailybackup:"",
      freetemplates:"",
      freemail:"",
      tendatabase:"",
      unlimitedemailadd:"",
      livesupport:""
    }
  ]

  testi = [
    {
      id:"",
      clientname:"",
      projectname:"",
      feedback:"",
      image5:""
    }
  ]

  team = [
    {
      id:"",
      name:"",
      designation:"",
      email:"",
      memberdesc:"",
      image4:""
    }
  ]

  blog = [
    {
      id:"",
      name:"",
      sentence:"",
      authorname:"",
      date:"",
      image3:"",
      description:""
    }
  ]

  ngOnInit(): void {
    this.service.getCompany().subscribe(res=>{
      this.company=res;
    })
    this.service.getProject().subscribe(res=>{
      this.project=res;
    })
    this.service.getPackage().subscribe(res=>{
      this.package=res;
    })
    this.service.getTesti().subscribe(res=>{
      this.testi=res;
    })
    this.service.getTeam().subscribe(res=>{
      this.team=res;
    })
    this.service.getBlog().subscribe(res=>{
      this.blog=res;
    })
  }



}

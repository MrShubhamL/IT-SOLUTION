import { Component, OnInit } from '@angular/core';

import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit{

  constructor(private readonly service:TeamService){}

  team = [
    {
      id:"",
      name:"",
      designation:"",
      email:"",
      image4:""
    }
  ]

  ngOnInit(): void {
    this.service.getTeam().subscribe(res=>{
      this.team=res;
    })
  }

}

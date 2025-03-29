import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  constructor(private readonly service:PortfolioService){}

  project = [
    {
      id:"",
      description:"",
      image2:""
    }
  ]

  ngOnInit(): void {
    this.service.getProject().subscribe(res=>{
      this.project=res;
    })
  }

}

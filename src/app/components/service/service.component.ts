import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements OnInit{

  constructor(private readonly service:CompanyService){}

  company = [
    {
      id:"",
      projectname:"",
      projectsummary:"",
      image:""
    }
  ]

  ngOnInit(): void {
    this.service.getCompany().subscribe(res=>{
      this.company=res;
    })
  }

}

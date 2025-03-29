import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs-details',
  templateUrl: './blogs-details.component.html',
  styleUrl: './blogs-details.component.css'
})
export class BlogsDetailsComponent implements OnInit{

  constructor(private readonly service:BlogService, private readonly router:Router){}

  news = [
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
    this.service.getBlog().subscribe(res=>{
      this.news = res;
    })
  }

}

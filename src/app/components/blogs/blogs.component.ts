import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit{

  constructor(private readonly service:BlogService, private readonly router:Router){}

  blogs = [
    {
      id : "",
      name : "",
      sentence : "",
      authorname : "",
      date : "",
      image3 : "",
    }
  ]

  ngOnInit(): void {
    this.service.getBlog().subscribe(res=>{
        this.blogs = res;
      // console.log(res);
    })
  }



}

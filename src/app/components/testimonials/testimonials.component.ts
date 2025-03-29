import { Component, OnInit } from '@angular/core';
import { TestiService } from '../../services/testi.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit{

  constructor(private readonly service:TestiService){}

  testi = [
    {
      id:"",
      clientname:"",
      projectname:"",
      feedback:"",
      image5:""
    }
  ]

  ngOnInit(): void {
    this.service.getTesti().subscribe(res=>{
      this.testi=res;
    })
  }
}

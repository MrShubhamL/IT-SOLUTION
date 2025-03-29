import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { CarrerService } from '../../services/carrer.service';

@Component({
  selector: 'app-carrers',
  templateUrl: './carrers.component.html',
  styleUrl: './carrers.component.css'
})
export class CarrersComponent implements OnInit{

  constructor(private readonly service:CarrerService, private readonly router:Router){}

   selectedFile: File | undefined

  form : FormGroup = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    contact : new FormControl(''),
    address : new FormControl(''),
    position : new FormControl(''),
    skl : new FormControl(''),
    resume : new FormControl('')
  })

  onFileSelect(event:any): void{
    this.selectedFile = event.target.files[0];
  }

  formSubmit(){
    console.log(this.form.value);
    const formData = this.createJobData(this.form.value)
    this.service.createStudent(formData).subscribe(res=>{
      console.log(res);
    }, err=>{
      console.log(err);
    })
  }

  createJobData(formValue:any):FormData{
    const formData = new FormData();

    formData.append('name',formValue.name);
    formData.append('email',formValue.email);
    formData.append('contact',formValue.contact);
    formData.append('address',formValue.address);
    formData.append('position',formValue.position);
    formData.append('skl',formValue.skl);
    if(this.selectedFile){
      formData.append('resume',this.selectedFile, this.selectedFile.name);
    }
    return formData;
  }

  carrer = [
    {
      id:"",
      role:"",
      experience:"",
      skill:"",
      vacancy:"",
      joblocation:"",
      description:""

    }
  ]

  ngOnInit(): void {
    this.service.getCarrer().subscribe(res=>{
      this.carrer = res;
    })

  }

}



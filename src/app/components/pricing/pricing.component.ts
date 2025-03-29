import { Component, OnInit } from '@angular/core';

import { PriceService } from '../../services/price.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent implements OnInit{

  constructor(private readonly service:PriceService){}

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

  ngOnInit(): void {
    this.service.getPackage().subscribe(res=>{
      this.package=res;
    })
  }

}

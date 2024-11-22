import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { BlogsComponent } from './components/blogs/blogs.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:"/home",
    pathMatch:"full"
  },
  {
    path: '',
    component: MainComponent,
    children:[
      {path:'home',component:HomeComponent,},
      { path:'about', component:AboutComponent},
      { path:'pricing',component:PricingComponent},
      { path:'faqs',component:FaqsComponent},
      {path:'privacy-policy',component:PrivacyPolicyComponent},
      {path:'blogs', component:BlogsComponent}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

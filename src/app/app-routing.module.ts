import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { NewsComponent } from './components/news/news.component';
import { NgModule } from '@angular/core';
import { TeamComponent } from './components/team/team.component';
import { AboutComponent } from './components/about/about.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

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
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'news',
        component: NewsComponent
      },
      {
        path:'team',
        component:TeamComponent
      }
    ,
    { path:'about',component:AboutComponent},
    {path:'faqs',component:FaqsComponent},
    {path:'pricing',component:PricingComponent},
    {path:'privacy-policy',component:PrivacyPolicyComponent},
    {path:'blogs',component:BlogsComponent}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

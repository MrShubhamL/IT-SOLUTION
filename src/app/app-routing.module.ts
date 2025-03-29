import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogsDetailsComponent } from './components/blogs-details/blogs-details.component';
import { CarrersComponent } from './components/carrers/carrers.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ServiceComponent } from './components/service/service.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

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
        path:'team',
        component:TeamComponent
      },

      {
        path:'portfolio',
        component:PortfolioComponent
      },

      {
        path:'service',
        component:ServiceComponent
      },

      {
        path:'testimonials',
        component:TestimonialsComponent
      },

      {
        path: 'about',
        component:AboutComponent
      },

      {
        path: 'blogs',
        component: BlogsComponent
      },

      {
        path:'faqs',
        component: FaqsComponent
      },

      {path:'pricing',
        component: PricingComponent
      },

      {
        path:'privacy-policy',
        component: PrivacyPolicyComponent
      },

      {
        path:'contact',
        component:ContactComponent
      },

      {
        path:'blogs-details',
        component:BlogsDetailsComponent
      },

      {
        path:'carrers',
        component:CarrersComponent
      },





    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

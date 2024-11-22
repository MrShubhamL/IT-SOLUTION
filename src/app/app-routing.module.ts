import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { NewsComponent } from './components/news/news.component';
import { NgModule } from '@angular/core';
import { PricingComponent } from './components/pricing/pricing.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TeamComponent } from './components/team/team.component';

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
      {path:'home',component:HomeComponent},

      {path:'news',component: NewsComponent},

      {path:'team',component:TeamComponent}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

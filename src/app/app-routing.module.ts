import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { NewsComponent } from './components/news/news.component';
import { NgModule } from '@angular/core';

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
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

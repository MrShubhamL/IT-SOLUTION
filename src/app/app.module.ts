import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/utilities/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/utilities/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { NgModule } from '@angular/core';
import { TeamComponent } from './components/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NewsComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

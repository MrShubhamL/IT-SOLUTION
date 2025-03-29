import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogsDetailsComponent } from './components/blogs-details/blogs-details.component';
import { CarrersComponent } from './components/carrers/carrers.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { FooterComponent } from './components/utilities/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/utilities/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceComponent } from './components/service/service.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    TeamComponent,
    AboutComponent,
    BlogsComponent,
    FaqsComponent,
    PricingComponent,
    PortfolioComponent,
    ServiceComponent,
    TestimonialsComponent,
    ContactComponent,
    BlogsDetailsComponent,
    CarrersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

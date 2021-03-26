import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/layout/header/header.component';
import { FooterComponent } from './Components/layout/footer/footer.component';

import { ClientsComponent } from './Components/clients/clients.component';
import { EnquiryFormComponent } from './Components/enquiry-form/enquiry-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './Components/layout/layout.component';
import { LayoutModule } from './Components/layout/layout.module';
import { MainComponent } from './Components/main/main.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
    ClientsComponent,
    EnquiryFormComponent,
    LayoutComponent,
    MainComponent,
    ContactUsComponent,
    AboutUsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

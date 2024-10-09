import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CareerComponent } from './pages/career/career.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ERPforApparelManufacturingComponent } from './pages/erpfor-apparel-manufacturing/erpfor-apparel-manufacturing.component';
import { ERPServicesComponent } from './pages/erp-services/erp-services.component';
import { CRMServicesComponent } from './pages/crm-services/crm-services.component';
import { StaffAugmentationServicesComponent } from './pages/staff-augmentation-services/staff-augmentation-services.component';
import { IDMXComponent } from './pages/idmx/idmx.component';
import { ISOXComponent } from './pages/isox/isox.component';
import { DMACComponent } from './pages/dmac/dmac.component';
import { ISPXComponent } from './pages/ispx/ispx.component';
import { TOPComponent } from './pages/top/top.component';
import { SpotYourDealComponent } from './pages/spot-your-deal/spot-your-deal.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { CaseStudiesComponent } from './pages/case-studies/case-studies.component';
import { TrainingComponent } from './pages/training/training.component';
import { ProfessionalServicesComponent } from './pages/professional-services/professional-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    CareerComponent,
    AboutUsComponent,
    ERPforApparelManufacturingComponent,
    ERPServicesComponent,
    CRMServicesComponent,
    StaffAugmentationServicesComponent,
    IDMXComponent,
    ISOXComponent,
    DMACComponent,
    ISPXComponent,
    TOPComponent,
    SpotYourDealComponent,
    BlogsComponent,
    OurServicesComponent,
    CaseStudiesComponent,
    TrainingComponent,
    ProfessionalServicesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

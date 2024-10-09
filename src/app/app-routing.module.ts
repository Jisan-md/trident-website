import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ERPforApparelManufacturingComponent } from './pages/erpfor-apparel-manufacturing/erpfor-apparel-manufacturing.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ERPServicesComponent } from './pages/erp-services/erp-services.component';
import { StaffAugmentationServicesComponent } from './pages/staff-augmentation-services/staff-augmentation-services.component';
import { IDMXComponent } from './pages/idmx/idmx.component';
import { ISOXComponent } from './pages/isox/isox.component';
import { DMACComponent } from './pages/dmac/dmac.component';
import { ISPXComponent } from './pages/ispx/ispx.component';
import { TOPComponent } from './pages/top/top.component';
import { SpotYourDealComponent } from './pages/spot-your-deal/spot-your-deal.component';
import { CaseStudiesComponent } from './pages/case-studies/case-studies.component';
import { TrainingComponent } from './pages/training/training.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { ProfessionalServicesComponent } from './pages/professional-services/professional-services.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'career', component: CareerComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'erpfor-apparel-manufacturing', component: ERPforApparelManufacturingComponent },
  { path: 'erp-services', component: ERPServicesComponent },
  { path: 'crm-services', component: ERPServicesComponent },
  { path: 'staff-augmentation', component: StaffAugmentationServicesComponent },
  { path: 'idmx', component: IDMXComponent },
  { path: 'isox', component: ISOXComponent },
  { path: 'dmac', component: DMACComponent },
  { path: 'ispx', component: ISPXComponent },
  { path: 'top', component: TOPComponent },
  { path: 'spot-your-deal', component: SpotYourDealComponent },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'professional-services', component: ProfessionalServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

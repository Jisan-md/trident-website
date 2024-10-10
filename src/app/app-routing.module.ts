import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';

import { IdmxComponent } from './pages/idmx/idmx.component';
import { IntelligentDataMigrationComponent } from './pages/intelligent-data-migration/intelligent-data-migration.component';
import { IsoxComponent } from './pages/isox/isox.component';
import { IspxComponent } from './pages/ispx/ispx.component';
import { SpotComponent } from './pages/spot/spot.component';
import { TimesOfPeopleComponent } from './pages/times-of-people/times-of-people.component';
import { DmacComponent } from './pages/dmac/dmac.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import{CareersComponent} from './pages/careers/careers.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import{ OurServicesComponent} from './pages/our-services/our-services.component';
import{ CaseStudiesComponent} from './pages/case-studies/case-studies.component';
import{ TrainingComponent} from './pages/training/training.component';
import{ ErpServicesComponent} from './pages/erp-services/erp-services.component';
import{ CrmServicesComponent} from './pages/crm-services/crm-services.component';
import{ StaffAugmentationServicesComponent} from './pages/staff-augmentation-services/staff-augmentation-services.component';







const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  
  { path: 'idmx', component: IdmxComponent },
  { path: 'intelligent-data-migration', component: IntelligentDataMigrationComponent },
  { path: 'isox', component: IsoxComponent },
  { path: 'ispx', component: IspxComponent },
  { path: 'spot', component: SpotComponent },
  { path: 'times-of-people', component: TimesOfPeopleComponent },
  { path: 'dmac', component: DmacComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'erp-services', component: ErpServicesComponent },
  { path: 'crm-services', component: CrmServicesComponent },
  { path: 'staff-augmentation', component: StaffAugmentationServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
